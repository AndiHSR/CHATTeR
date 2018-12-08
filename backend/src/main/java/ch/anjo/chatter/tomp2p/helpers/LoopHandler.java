package ch.anjo.chatter.tomp2p.helpers;

import ch.anjo.chatter.websocket.templates.WebSocketMessage;
import java.util.Calendar;
import java.util.HashMap;
import java.util.Map;

public class LoopHandler {

  private Map<WebSocketMessage, Calendar> lastMessages;

  public LoopHandler() {
    this.lastMessages = new HashMap<>();
  }

  public void setNewMessage(WebSocketMessage webSocketMessage) {
    lastMessages.put(webSocketMessage, Calendar.getInstance());
  }

  public boolean isLoopMessage(WebSocketMessage webSocketMessage) {
    boolean didALoopOccurred = lastMessages.keySet().stream().anyMatch(webSocketMessage::equals);
    cleanUpMessages();
    return didALoopOccurred;
  }

  private void cleanUpMessages() {
    Calendar now = Calendar.getInstance();

    lastMessages
        .keySet()
        .stream()
        .filter(
            webSocketMessage -> {
              Calendar messageDate = lastMessages.get(webSocketMessage);
              now.add(Calendar.MINUTE, -2);
              return now.after(messageDate);
            })
        .forEach(lastMessages::remove);
  }
}
