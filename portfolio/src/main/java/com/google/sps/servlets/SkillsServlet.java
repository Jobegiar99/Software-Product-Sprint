package com.google.sps.servlets;
import java.io.IOException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse; 

@WebServlet("/skills")
public final class SkillsServlet extends HttpServlet {

    private String skillJSON = "{ "+
                                  "\"Skills\":[ "+
                                        "{\"name\": \"Python\",\"level\": \"Intermediate\"},"+
                                        "{\"name\": \"C++\", \"level\":\"Intermediate\"}," +
                                        "{\"name\": \"C#\", \"level\":\"Intermediate\"},"+
                                        "{\"name\": \"Java\", \"level\":\"Beginner\"},"+
                                        "{\"name\": \"JavaScript\", \"level\": \"Beginner\"}"+
                                    "]"+
                                "}";
    
  @Override
  public void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException {
    // Convert the server stats to JSON
    
    
    // Send the JSON as the response
    response.setContentType("application/json;");
    response.getWriter().println(skillJSON);
    
  }
}
