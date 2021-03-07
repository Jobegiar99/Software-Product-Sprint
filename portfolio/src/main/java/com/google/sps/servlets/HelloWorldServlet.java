package com.google.sps.servlets;

import java.io.IOException;
import java.util.Random;

import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;


/** Handles requests sent to the /hello URL. Try running a server and navigating to /hello! */
@WebServlet("/randomFact")
public class HelloWorldServlet extends HttpServlet {

    private String[] randomFacts = new String[]{
            "I like to do voice acting. Currently, I can do 12ish different voices, which are from the characters of La Commedia dell'Arte\n\n",
            "I like to compose loops for videogames and for theatre plays. I have composed the soundtrack for two plays from my country and a song for a college play.\n\n",
            "A professor from my college, whose name is Davalos, allowed us to\n create memes for 3 extra points in the course.\n" +
            "\nI'm very bad creating memes, so in our Computer Organization course\n I asked  him if I could develop a videogame - meme for the extra points.\n That's how Davatrix was born." +
            "One year later,\n I took the Network Fundamentals course with him again,\n so I created the sequel of Davatrix,\n in which he has to help Vinton Cerf to save the internet.\n\n",
        };
        
    private Random rand = new Random();

  @Override
  public void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException {
        response.setContentType("text/html;");
        response.getWriter().println(randomFacts[ rand.nextInt( randomFacts.length ) ]);
        
  }
}
