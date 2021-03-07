package com.google.sps.servlets;

import java.io.IOException;
import java.util.Random;

import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;


/** Handles requests sent to the /hello URL. Try running a server and navigating to /hello! */
@WebServlet("/hello")
public class HelloWorldServlet extends HttpServlet {

  @Override
  public void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException {
        String[] randomFacts = new String[]{
            "I like to do voice acting. Currently, I can do 12ish different voices, which are from the characters of La Commedia dell'Arte",
            "I like to compose loops for videogames and for theatre plays. I have composed the soundtrack for two plays from my country and a song for a college play.",
            "A professor from my college known as Davalos allowed us to create memes for 3 extra points in the course. " +
            "\nI'm very bad creating memes, so in our Computer Organization course I asked  him if I could develop a videogame - meme for the extra points. That's how Davatrix was born.\n" +
            "One year later, I took the Network Fundamentals course with him again, so I created the sequel of Davatrix, in which he has to help Vinton Cerf to save the internet.",
        };
        Random rand = new Random();
        
        response.setContentType("text/html;");
        response.getWriter().println(
            "<head>"+
                "<meta charset=\"UTF-8\">"+
                "<title>My Portfolio</title>"+
                "<link rel=\"stylesheet\" href=\"style.css\">"+
                "<link rel=\"preconnect\" href=\"https://fonts.gstatic.com\">"+
                "<link href=\"https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;600;700;800;900&display=swap\" rel=\"stylesheet\">"+
            "</head>"+
            "<body>"+
                "<div align = \"center\" id =\"content\">"+
                    "<h1>Random Fact About Me:</h1>"+
                    "<br><br><br><br>"+
                    "<h3>" + randomFacts[ rand.nextInt( randomFacts.length ) ] + "</h3>"+
                "</div>"+
            "</body>");
        
  }
}
