const assert = require('assert')
const fs = require('fs')
const path = require('path')

try {
  // Clear require cache for config to make sure it loads fresh
  delete require.cache[require.resolve('./config')]
  
  const config = require('./config')
  
  const dbPath = path.resolve(__dirname, config.dbFile)
  const dbDir = path.dirname(dbPath)
  
  const logPath = path.resolve(process.cwd(), config.logger.logFilePath)
  const logDir = path.dirname(logPath)
  
  // Assert both directories exist
  assert.ok(fs.existsSync(dbDir), "Database directory should exist")
  assert.ok(fs.existsSync(logDir), "Log directory should exist")
  
  console.log("Regression Test Passed: SQLite and Log directories exist and are accessible.")
  process.exit(0)
} catch (error) {
  console.error("Regression Test Failed:", error)
  process.exit(1)
}
