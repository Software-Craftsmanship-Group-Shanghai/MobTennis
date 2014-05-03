Given(/^tennis game starts$/) do
  visit 'http://localhost/tennis/src/mob-tennis.html'
end

When(/^player1 scores (\d+) times$/) do |times|
  times.to_i.times {click_button 'Joseph Score'}
end

When(/^player2 scores (\d+) times$/) do |times|
  times.to_i.times {click_button 'Jackson Score'}
end

Then(/^score should be Forty Thirty$/) do
  should have_text 'Forty Thirty'
end