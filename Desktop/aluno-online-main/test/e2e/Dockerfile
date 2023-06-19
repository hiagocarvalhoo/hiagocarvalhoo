FROM ruby:3.0.2
RUN wget -qO /tmp/google.pub https://dl-ssl.google.com/linux/linux_signing_key.pub \
    && apt-key add /tmp/google.pub && rm /tmp/google.pub \
    && echo 'deb http://dl.google.com/linux/chrome/deb/ stable main' > /etc/apt/sources.list.d/google.list \
    && apt-get update && apt-get -y install google-chrome-stable
RUN wget -qO /tmp/chromedriver.zip http://chromedriver.storage.googleapis.com/$(curl -sS chromedriver.storage.googleapis.com/LATEST_RELEASE)/chromedriver_linux64.zip \
    && unzip /tmp/chromedriver.zip -d /usr/local/bin && rm /tmp/chromedriver.zip
WORKDIR /app
COPY test/e2e/Gemfile ./
RUN bundle install
COPY test/e2e .
CMD [ "cucumber", "features/specifications" ]