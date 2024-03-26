'use strict';

/**
 * meta-data router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::meta-data.meta-data');
