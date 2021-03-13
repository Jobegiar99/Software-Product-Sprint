package com.google.sps.servlets;

import java.io.IOException;

import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;


/** Handles requests sent to the /hello URL. Try running a server and navigating to /hello! */
@WebServlet("/credits")
public class CreditServlet extends HttpServlet {

    private String credits = 
            "Background image: https://www.artstation.com/artwork/GXwZgz \n\n"+
            "User Interface Images: https://wenrexa.itch.io/ui-different01\n\n";
            
  @Override
  public void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException {
        
        
        response.setContentType("text/html;");
        response.getWriter().println( credits );
        
  }
}
