const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const twilio = require('twilio');
const { OpenAI } = require('openai');

const app = express();
app.use(bodyParser.json());

const twilioAccountSid = 'SID in Twilio';
const twilioAuthToken = 'TOKEN in Twilio';
const twilioClient = twilio(twilioAccountSid, twilioAuthToken);
const twilioWhatsAppNumber = 'whatsapp:+14155238886';

const openai = new OpenAI({
    apiKey: 'API key OpenAI',
});

const bitrixWebhook = 'BITRIX24 webhook';

async function callOpenAI(message) {
    let attempt = 0;
    const maxAttempts = 5;
    const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

    while (attempt < maxAttempts) {
        try {
            const gptResponse = await openai.chat.completions.create({
                model: 'gpt-3.5-turbo',
                messages: [{ role: 'user', content: message }],
                max_tokens: 2048,
            });
            return gptResponse.data.choices[0].message.content;
        } catch (error) {
            if (error.code === 'insufficient_quota') {
                console.error('Quota exceeded, attempt:', attempt + 1);
                attempt++;
                await delay(1000 * attempt);
            } else {
                throw error;
            }
        }
    }
    throw new Error('Max attempts exceeded for OpenAI API call');
}

app.post('/webhook', async (req, res) => {
    try {
        console.log('Received a message:', req.body);

        const message = req.body.Body;
        const from = req.body.From;

        
        const chatResponse = await callOpenAI(message);

        console.log('GPT response:', chatResponse);

      
        await twilioClient.messages.create({
            body: chatResponse,
            from: twilioWhatsAppNumber,
            to: from,
        });

        console.log('Sent message to WhatsApp:', chatResponse);

        
        await axios.post(bitrixWebhook, {
            fields: {
                TITLE: 'New WhatsApp Message',
                COMMENTS: chatResponse,
                SOURCE_DESCRIPTION: from,
            },
        });

        console.log('Sent message to Bitrix24');

        res.sendStatus(200);
    } catch (error) {
        console.error('Error processing webhook:', error);
        res.sendStatus(500);
    }
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
