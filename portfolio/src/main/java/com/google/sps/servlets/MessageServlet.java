package com.google.sps.servlets;

import java.io.IOException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.cloud.datastore.Datastore;
import com.google.cloud.datastore.DatastoreOptions;
import com.google.cloud.datastore.Entity;
import com.google.cloud.datastore.FullEntity;
import com.google.cloud.datastore.KeyFactory;

@WebServlet("/message-me")
public class MessageServlet extends HttpServlet {

  Datastore datastore = DatastoreOptions.getDefaultInstance().getService();
  
  @Override
  public void doPost(HttpServletRequest request, HttpServletResponse response) throws IOException {

    // Get the value entered in the form.
    String textValue = request.getParameter("text-input");

    // Print the value so you can see it in the server logs.
    System.out.println("You submitted: " + textValue);
    
    KeyFactory keyFactory = datastore.newKeyFactory().setKind("Message");
    FullEntity taskEntity =
        Entity.newBuilder(keyFactory.newKey())
            .set("messageContent", textValue)
            .build();
    datastore.put(taskEntity);

    response.sendRedirect("/index.html");

  }
}