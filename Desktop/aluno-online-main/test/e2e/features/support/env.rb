require 'capybara'
require 'capybara/cucumber'
require "selenium-webdriver"

Capybara.register_driver :chrome_headless do |app|
    options = ::Selenium::WebDriver::Chrome::Options.new
    options.add_argument('--headless')
    options.add_argument('--no-sandbox')
    options.add_argument('--disable-gpu')
    options.add_argument('--disable-dev-shm-usage')
    options.add_argument('--window-size=1027,768')
    Capybara::Selenium::Driver.new(app, browser: :chrome, options: options)
end

Capybara.configure do |config|
    config.default_driver = :chrome_headless
    config.app_host = 'http://aluno-online:3000'
    config.save_path = 'reports/screenshots'
end