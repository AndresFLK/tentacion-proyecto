FROM python:3.9-slim

RUN apt-get -q -y update 
RUN apt-get install -y gcc
RUN apt-get install -y libpq-dev

ENV USERNAME=cool-app
ENV WORKING_DIR=/home/cool-app
ENV SECRET_KEY=B!1w8*NAt1T^%kvhUI*S^_
ENV JWT_KEY=D5*F?_1?-d$f*1
ENV PSQL_URI=postgresql://db:5432/cool_db

WORKDIR ${WORKING_DIR}

COPY . .
COPY requirements.txt .
COPY service_entrypoint.sh .

RUN groupadd ${USERNAME} && \
    useradd -g ${USERNAME} ${USERNAME}

RUN chown -R ${USERNAME}:${USERNAME} ${WORKING_DIR}
RUN chmod -R u=rwx,g=rwx ${WORKING_DIR}

USER ${USERNAME}
ENV PATH "$PATH:/home/${USERNAME}/.local/bin"

RUN pip install --upgrade pip \
    && pip install -r requirements.txt

ENV FLASK_APP=best_app
RUN chmod +x service_entrypoint.sh

EXPOSE 5000
RUN flask --app index.py db init 

ENTRYPOINT [ "./service_entrypoint.sh" ]
