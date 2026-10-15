"""Synthetic demo export only. Does not connect to Slack or Calendar."""
def reply(elapsed_minutes, priority):
    if elapsed_minutes < 15:
        return "Grace window: no reply yet."
    return f"No. Focus block. Your priority is {priority}."

if __name__ == "__main__":
    print(reply(15, "shipping the API"))
