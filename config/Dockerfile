FROM python:3.5.2

ENV HelloWorld 1

RUN mkdir /code

WORKDIR /code

ADD ./config/requirements.txt /code/

RUN pip install -r requirements.txt

ADD . /code/
