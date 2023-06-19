After('@logout') do
    visit('/logout')
end

After do |scenario|
    scenario_name = scenario.name.gsub(/\s+/,'_').tr('/','_').downcase!
    screenshot_name = "#{scenario_name}.png"
    page.save_screenshot(screenshot_name)
    attach("#{Capybara.save_path}/#{screenshot_name}", 'image/png')
end