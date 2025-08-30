/**
 * Category: Events
 * This file defines custom event blocks for the Meta Blockly editor.
 * Event blocks are hat blocks that trigger scripts when certain conditions are met.
 */

import Blockly from 'blockly/core';

/**
 * Block: when go button clicked
 * A hat block that starts a script when the "Go" button is clicked.
 */
Blockly.Blocks['meta_go_button'] = {
  init: function () {
    this.appendDummyInput()
        .appendField("when go button clicked");
    this.setNextStatement(true); // Allows blocks to follow
    this.setColour(60); // Yellow for event blocks
    this.setTooltip("Triggers when the Go button is clicked");
    this.setHelpUrl(""); // Optional: link to docs or wiki
  }
};

/**
 * Block: when plugin loaded
 * Triggers when a plugin is loaded into the workspace.
 */
Blockly.Blocks['meta_plugin_loaded'] = {
  init: function () {
    this.appendDummyInput()
        .appendField("when plugin loaded");
    this.setNextStatement(true);
    this.setColour(60);
    this.setTooltip("Runs when a plugin is loaded");
    this.setHelpUrl("");
  }
};

/**
 * Block: when variable changed
 * Triggers when a specific variable changes.
 */
Blockly.Blocks['meta_variable_changed'] = {
  init: function () {
    this.appendDummyInput()
        .appendField("when variable")
        .appendField(new Blockly.FieldVariable("item"), "VAR")
        .appendField("changes");
    this.setNextStatement(true);
    this.setColour(60);
    this.setTooltip("Runs when the selected variable changes");
    this.setHelpUrl("");
  }
};

/**
 * Export block definitions for registration.
 */
export const blocks = {
  meta_go_button: Blockly.Blocks['meta_go_button'],
  meta_plugin_loaded: Blockly.Blocks['meta_plugin_loaded'],
  meta_variable_changed: Blockly.Blocks['meta_variable_changed']
};
