module.exports = {
  client: {
    token: "",
    id: "",
  },
  handler: {
    prefix: ">",
    deploy: true,
    commands: {
      prefix: true,
      slash: true,
      user: false,
      message: false,
    },
    mongodb: {
      enabled: false,
      uri: "",
    },
  },

  embed: {
    color: 0x2b2d31,
  },

  users: {
    developers: [""],
  },

  development: {
    enabled: false,
    guild: "",
  },

  messageSettings: {
    nsfwMessage: "The current channel is not a NSFW channel.",
    developerMessage: "You are not authorized to use this command.",
    cooldownMessage:
      "Slow down buddy! You're too fast to use this command ({cooldown}s).",
    globalCooldownMessage:
      "Slow down buddy! This command is on a global cooldown ({cooldown}s).",
    notHasPermissionMessage:
      "You do not have the permission to use this command.",
    notHasPermissionComponent:
      "You do not have the permission to use this component.",
    missingDevIDsMessage:
      "This is a developer only command, but unable to execute due to missing user IDs in configuration file.",
  },
};
