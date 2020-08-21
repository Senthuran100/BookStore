FROM openjdk:8
EXPOSE 8081
ADD target/book-rest-api-reactjs-0.0.1-SNAPSHOT.jar book-rest-api-reactjs-0.0.1-SNAPSHOT.jar
ENTRYPOINT ["java","-jar","/book-rest-api-reactjs-0.0.1-SNAPSHOT.jar"]