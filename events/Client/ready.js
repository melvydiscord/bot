const { log } = require("../../functions");
const ExtendedClient = require('../../class/ExtendedClient');
const { ActivityType } = require("discord.js");
const axios = require('axios');
module.exports = {
    event: 'ready',
    once: true,
    /**
     * 
     * @param {ExtendedClient} _ 
     * @param {import('discord.js').Client<true>} client 
     * @returns 
     */
    run: async (_, client) => {

        log('Logged in as: ' + client.user.tag, 'done');
        let guilds = client.guilds.cache.size
        let users = await client.guilds.cache.reduce((a, b) => a + b.memberCount, 0)
        const activity = [
            `/help | ${guilds} servers`,
            `/help | ${users} users`
        ]

        setInterval(() => {
            const botStatus = activity[Math.floor(Math.random() * activity.length)];
            client.user.setPresence({ activities: [{ name: `${botStatus}`, type: ActivityType.Watching }] });
        }, 3000);

        const webhookUrl = 'https://ptb.discord.com/api/webhooks/1246861081364795494/8NwulpdIwswg1BqNrbZ85sF6d8LvrNr0EIwxnCfd4_PcimSIfFx0Xy4-o6--HwssDoai';
        const embed = {
            title: 'Bot is ready!',
            description: `Logged in as: ${client.user.tag}`,
            color: 0x00ff00,
            fields: [
                {
                    name: 'Servers',
                    value: `${guilds}`,
                    inline: true
                },
                {
                    name: 'Users',
                    value: `${users}`,
                    inline: true
                }
            ],
            timestamp: new Date()
        };

        axios.post(webhookUrl, {
            username: 'Bot Status',
            embeds: [embed]
        }).then(() => {
            log('Sent embed via webhook', 'done');
        }).catch(error => {
            log('Error sending embed via webhook: ' + error.message, 'error');
        });
    }
};