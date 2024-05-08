'use strict';

/**
 * gpt-answer service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::gpt-answer.gpt-answer');
