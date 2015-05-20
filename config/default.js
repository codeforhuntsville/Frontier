'use strict';
module.exports = {
  port: 8080,
  googlePlacesApiKey: '', // define this in local.js

  /**
   * Shortcut function to get only the isValid property from config validity report.
   * @returns {boolean}
   */
  isValid: function() {
    return this.getConfigValidityReport().isValid;
  },

  /**
   * Generates a "report" on whether or not the config is valid.  Report contains all error messages
   * as well as a simple "isValid" property.
   */
  getConfigValidityReport: function() {
    // Assume zero errors and valid by default.
    var summary = { errors: [], isValid: true };
    // Check the configuration parameters.  Return false on invalid config.
    if (!this.googlePlacesApiKey) {
      summary.errors.push("Places API key was not defined.  Please supply a Google Places API Key and try again.  Refer to README file for more information.");
    }

    // TODO: Add any additional checks here.

    // Set the isValid flag to false if errors present.
    if (summary.errors.length !== 0) {
      summary.isValid = false;
    }

    return summary;
  }
};
