'use strict';

/**
 * meta-data service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::meta-data.meta-data');
