const intents = {
    greeting: {
        patterns: ["Hi", "Hey", "How are you", "Is anyone there?", "Hello", "Good day", "What's up?", "Good morning", "Good afternoon", "Good evening", "Howdy", "Greetings", "Hi there", "Heya", "Hey there", "Hey!", "Heya!", "Hi!", "Hello there", "What's happening?", "How's it going?", "How do you do?", "What's new?", "Hi! How are you?", "Hello! How's your day going?", "Good to see you!", "Hi! What's up?", "Hey! How are you doing?"],
        responses: [
            "Hello, I'm here for you. How are you feeling today?",
            "Hi there. What’s on your mind?",
            "Hello, I’m here to listen. How can I support you today?",
            "Hi! How can I assist you in feeling better today?",
            "Greetings! How can I help you today?",
            "Hey! How are you doing?",
            "Hello! What can I do for you today?",
            "Hi! How's it going?",
            "Hey there! What's on your mind?",
            "Good day! How can I assist you today?",
            "Hello! How's your day going?",
            "Hi there! How can I support you today?",
            "Hey! How are you feeling today?",
            "Hello! How can I make your day better?",
            "Hi! What can I do for you today?",
            "Greetings! How can I assist you?",
            "Hey! What's up?",
            "Hello! How can I help?",
            "Hi! How are you today?",
            "Hey there! How's it going?",
            "Hello! What can I assist you with today?",
            "Hi! How's everything going?",
            "Hey! What can I do to help today?",
            "Hello! How can I be of service?",
            "Hi! How can I make your day a little brighter?",
            "Hey! What's on your mind today?",
            "Hello! How are you feeling today?",
            "Hi! What can I help you with today?",
            "Greetings! How can I support you?",
            "Hey! How are things?",
            "Hello! How can I assist you today?",
            "Hi! How's your day going so far?",
            "Hey! How can I help you today?",
            "Hello! How are you feeling right now?",
            "Hi! What can I do for you?",
            "Hey! What's up today?",
            "Hello! How can I support you today?",
            "Hi! How can I assist you right now?",
            "Hey! How's it going today?",
            "Hello! How can I help you right now?",
            "Hi! How are you doing today?",
            "Hey! How can I be of assistance?",
            "Hello! What can I do for you?",
            "Hi! How's your day going?",
            "Hey! What's new?",
            "Hello! How can I make your day better?",
            "Hi! How are you today?",
            "Hey! What's happening?",
            "Hello! How can I assist you?",
            "Hi! How can I support you today?",
            "Hey! How are you feeling today?",
            "Hello! What can I do to help?",
            "Hi! What's on your mind?",
            "Hey! How's it going?",
            "Hello! How can I be of service?",
            "Hi! How's your day going?",
            "Hey! What's up?",
            "Hello! How can I help?",
            "Hi! How are you today?",
            "Hey! What's happening?",
            "Hello! How can I assist you today?",
            "Hi! How can I make your day better?",
            "Hey! How are you doing today?",
            "Hello! How can I support you today?",
            "Hi! How's it going?",
            "Hey! What's new?",
            "Hello! How are you feeling today?",
            "Hi! How can I help?",
            "Hey! What's on your mind?",
            "Hello! How can I assist you?",
            "Hi! How's your day?",
            "Hey! How are you today?",
            "Hello! What's up?",
            "Hi! How can I be of help?",
            "Hey! How's it going?",
            "Hello! How can I support you?",
            "Hi! How are you feeling today?",
            "Hey! What's happening?",
            "Hello! How can I help you today?",
            "Hi! How can I assist you?",
            "Hey! How are you doing?",
            "Hello! How's your day going?",
            "Hi! How can I support you?",
            "Hey! What's on your mind?",
            "Hello! How can I assist you?",
            "Hi! How's it going?",
            "Hey! How are you today?",
            "Hello! How can I help?",
            "Hi! What's up?",
            "Hey! How's it going?",
            "Hello! How can I support you today?",
            "Hi! How are you doing?",
            "Hey! What's happening?",
            "Hello! How can I assist you today?",
            "Hi! How can I make your day better?",
            "Hey! How's it going?",
            "Hello! How can I help you today?",
            "Hi! How's your day going?"
        ]
    },
    goodbye: {
        patterns: ["Bye", "See you later", "Goodbye", "See ya", "Take care", "Later", "Bye bye", "Farewell", "Catch you later", "Goodnight", "I'm out", "Peace", "See you", "Goodbye for now", "Take it easy", "Later alligator", "Ciao", "Adios", "So long", "Until next time", "Goodbye and take care", "See you soon", "Bye for now", "Talk to you later", "Have a great day", "I'm leaving", "Got to go", "See you around", "Bye, take care", "Catch you on the flip side", "Bye for now!", "Later gator", "Bye, see you soon!", "Bye, have a good one!", "See you next time!", "Take care, bye!", "Goodbye, have a nice day!", "See you later, take care!", "Goodbye, take care!", "See you, bye!", "Goodbye, see you later!", "Take care, goodbye!", "Catch you later, bye!", "Bye, see you next time!", "Goodbye, see you around!", "Take care, see you soon!", "Bye, talk to you later!", "Goodbye, have a good day!", "See you, take care!", "Goodbye, see you next time!", "Take care, see you!", "Catch you later, see you soon!", "Bye, have a great day!", "Goodbye, see you soon!", "Take care, see you around!", "Bye, catch you later!", "Goodbye, talk to you later!", "See you later, bye!", "Take care, see you next time!", "Bye, have a nice day!", "Goodbye, catch you later!", "See you, have a good day!", "Goodbye, see you soon!", "Take care, talk to you later!", "Bye, see you around!", "Goodbye, have a great day!", "See you later, have a nice day!", "Take care, see you later!", "Bye, see you next time!", "Goodbye, see you!", "Catch you later, have a good day!", "Bye, have a great day!", "Goodbye, see you later!", "Take care, see you soon!", "Bye, talk to you later!", "Goodbye, have a nice day!", "See you later, take care!", "Take care, goodbye!", "Catch you later, bye!", "Bye, see you next time!", "Goodbye, see you around!", "Take care, see you soon!", "Bye, have a great day!", "Goodbye, see you soon!", "Take care, see you around!", "Bye, catch you later!", "Goodbye, talk to you later!", "See you later, bye!", "Take care, see you next time!", "Bye, have a nice day!", "Goodbye, catch you later!", "See you, have a good day!", "Goodbye, see you soon!", "Take care, talk to you later!", "Bye, see you around!", "Goodbye, have a great day!"],
        responses: [
            "Take care and remember I’m here whenever you need to talk.",
            "Goodbye for now. I hope you have a peaceful day.",
            "See you later. Don't hesitate to reach out if you need support.",
            "Goodbye! Wishing you all the best!",
            "Farewell! Remember, I'm always here if you need me.",
            "Bye! Take care and stay safe.",
            "Goodbye! I hope you have a wonderful day.",
            "See you soon! Take care of yourself.",
            "Bye! Have a great day ahead.",
            "Goodbye! Stay positive and take care.",
            "See you later! Wishing you a happy day.",
            "Bye! Don't forget to take care of yourself.",
            "Goodbye! Remember to be kind to yourself.",
            "Take care! I'm here whenever you need to talk.",
            "See you soon! Take care and stay strong.",
            "Bye! Hope to chat with you again soon.",
            "Goodbye! Sending you positive vibes.",
            "See you later! Have a great rest of your day.",
            "Take care! Remember, I'm always here for you.",
            "Goodbye! Take care and stay positive.",
            "Bye! Wishing you a peaceful day.",
            "See you soon! Don't hesitate to reach out if you need anything.",
            "Goodbye! Have a wonderful day.",
            "Take care! I'm here if you need me.",
            "Bye! Wishing you a great day ahead.",
            "See you later! Take care of yourself.",
            "Goodbye! Stay safe and take care.",
            "Take care! Remember to be kind to yourself.",
            "Bye! Have a great day.",
            "Goodbye! Wishing you all the best.",
            "See you soon! Take care and stay positive.",
            "Take care! I'm here if you need to talk.",
            "Bye! Have a peaceful day.",
            "Goodbye! Remember to take care of yourself.",
            "See you later! Wishing you a happy day.",
            "Take care! Don't forget to be kind to yourself.",
            "Bye! Hope to chat with you again soon.",
            "Goodbye! Sending you positive vibes.",
            "See you soon! Take care and stay strong.",
            "Take care! I'm here whenever you need me.",
            "Bye! Wishing you a wonderful day.",
            "Goodbye! Stay positive and take care.",
            "See you later! Have a great rest of your day.",
            "Take care! Remember, I'm always here for you.",
            "Bye! Have a great day ahead.",
            "Goodbye! Wishing you a peaceful day.",
            "See you soon! Take care of yourself.",
            "Take care! I'm here if you need anything.",
            "Bye! Have a great day.",
            "Goodbye! Remember to be kind to yourself.",
            "See you later! Wishing you all the best.",
            "Take care! I'm here if you need to talk.",
            "Bye! Have a wonderful day.",
            "Goodbye! Stay safe and take care.",
            "See you soon! Take care and stay positive.",
            "Take care! Remember to be kind to yourself.",
            "Bye! Wishing you a peaceful day.",
            "Goodbye! Have a great day.",
            "See you later! Take care and stay strong.",
            "Take care! I'm here whenever you need me.",
            "Bye! Have a wonderful day.",
            "Goodbye! Wishing you all the best.",
            "See you soon! Take care and stay safe.",
            "Take care! Remember to take care of yourself.",
            "Bye! Have a great day ahead.",
            "Goodbye! Wishing you a peaceful day.",
            "See you later! Wishing you a happy day.",
            "Take care! I'm here if you need to talk.",
            "Bye! Have a great day.",
            "Goodbye! Stay safe and take care.",
            "See you soon! Take care and stay positive.",
            "Take care! Remember to be kind to yourself.",
            "Bye! Wishing you a wonderful day.",
            "Goodbye! Sending you positive vibes.",
            "See you later! Have a great rest of your day.",
            "Take care! I'm here whenever you need me.",
            "Bye! Have a peaceful day.",
            "Goodbye! Wishing you all the best.",
            "See you soon! Take care of yourself.",
            "Take care! Don't forget to be kind to yourself.",
            "Bye! Hope to chat with you again soon.",
            "Goodbye! Stay positive and take care.",
            "See you later! Wishing you a happy day.",
            "Take care! I'm here if you need anything.",
            "Bye! Have a great day ahead.",
            "Goodbye! Remember to take care of yourself.",
            "See you soon! Take care and stay safe.",
            "Take care! I'm here if you need to talk.",
            "Bye! Have a wonderful day.",
            "Goodbye! Wishing you all the best.",
            "See you later! Take care and stay positive.",
            "Take care! Remember to be kind to yourself.",
            "Bye! Wishing you a peaceful day.",
            "Goodbye! Have a great day.",
            "See you soon! Wishing you a happy day."
        ]
    },
    thanks: {
        patterns: ["Thanks", "Thank you", "That's helpful", "Thank's a lot!", "I appreciate it", "Thanks so much", "Thank you very much", "Thanks a ton", "Many thanks", "I appreciate your help", "Thanks for the support", "Thank you so much", "Thanks a million", "I can't thank you enough", "Thanks for everything", "Thank you for your help", "Thanks for your assistance", "I'm grateful", "Thank you kindly", "Thank you for the support", "Thanks a bunch", "Thank you for your time", "I appreciate your assistance", "Thank you for helping me", "Thanks for your advice", "Thank you for your kindness", "I appreciate your time", "Thanks for your concern", "Thank you for your understanding", "Thanks for being there", "Thank you for listening", "Thanks for your patience", "I appreciate your patience", "Thank you for your patience", "Thanks for your support", "Thank you for your care", "I appreciate your understanding", "Thanks for your kindness", "Thank you for your compassion", "Thanks for your generosity", "Thank you for your generosity", "I appreciate your generosity", "Thanks for your thoughtfulness", "Thank you for your thoughtfulness", "Thanks for your help", "Thank you for your advice", "Thanks for your guidance", "Thank you for your guidance", "I appreciate your guidance", "Thanks for your assistance", "Thank you for your assistance", "Thanks for being helpful", "Thank you for being helpful", "Thanks for being kind", "Thank you for being kind", "Thanks for your help today", "Thank you for your help today", "Thanks for your support today", "Thank you for your support today", "Thanks for your help earlier", "Thank you for your help earlier", "Thanks for your support earlier", "Thank you for your support earlier", "Thanks for your advice today", "Thank you for your advice today", "Thanks for your concern today", "Thank you for your concern today", "Thanks for your understanding today", "Thank you for your understanding today", "Thanks for your kindness today", "Thank you for your kindness today", "Thanks for your compassion today", "Thank you for your compassion today", "Thanks for your generosity today", "Thank you for your generosity today", "Thanks for your thoughtfulness today", "Thank you for your thoughtfulness today", "Thanks for being helpful today", "Thank you for being helpful today", "Thanks for being kind today", "Thank you for being kind today", "Thanks for your guidance today", "Thank you for your guidance today", "Thanks for your assistance today", "Thank you for your assistance today", "Thanks for your help just now", "Thank you for your help just now", "Thanks for your support just now", "Thank you for your support just now", "Thanks for your advice just now", "Thank you for your advice just now", "Thanks for your concern just now", "Thank you for your concern just now", "Thanks for your understanding just now", "Thank you for your understanding just now", "Thanks for your kindness just now", "Thank you for your kindness just now", "Thanks for your compassion just now", "Thank you for your compassion just now", "Thanks for your generosity just now", "Thank you for your generosity just now", "Thanks for your thoughtfulness just now", "Thank you for your thoughtfulness just now", "Thanks for being helpful just now", "Thank you for being helpful just now"],
        responses: ["You’re welcome. I’m glad I could help.", "Anytime. I’m here for you.", "My pleasure. Take care!", "You're welcome! I'm here to support you.", "No problem! Let me know if there's anything else I can do.", "It was my pleasure. Don't hesitate to reach out if you need anything.", "Glad I could help. Take care!", "You're welcome! Wishing you all the best.", "No worries! I'm here whenever you need me.", "Happy to help. Have a great day!", "You're very welcome. If you need anything, just ask.", "Anytime! Take care of yourself.", "My pleasure! Let me know if there's anything else I can do.", "You're welcome! I'm here for you.", "No problem! If you need more help, just let me know.", "Glad to assist! Have a great day!", "You're welcome! Take care of yourself.", "Happy to help! Wishing you all the best.", "No worries! I'm here if you need me.", "You're very welcome. Take care!", "Anytime! Don't hesitate to reach out if you need anything.", "My pleasure! I'm here to support you.", "You're welcome! If you need anything, just ask.", "No problem! Have a great day!", "Glad to help! Take care!", "You're welcome! Wishing you all the best.", "Happy to assist! Let me know if there's anything else I can do.", "You're very welcome. If you need more help, just let me know.", "Anytime! Take care of yourself.", "My pleasure! I'm here for you.", "No worries! I'm here whenever you need me.", "You're welcome! Have a great day!", "Glad to be of assistance. Take care!", "You're very welcome. Wishing you all the best.", "Happy to help! If you need anything, just ask.", "Anytime! Don't hesitate to reach out if you need anything.", "My pleasure! I'm here to support you.", "You're welcome! Let me know if there's anything else I can do.", "No problem! Take care of yourself.", "Glad I could help! Wishing you all the best.", "You're welcome! I'm here if you need me.", "Happy to assist! Have a great day!", "You're very welcome. If you need anything, just ask.", "Anytime! Take care!", "My pleasure! Let me know if you need more help.", "No worries! I'm here whenever you need me.", "You're welcome! Take care!", "Glad to be of assistance. Have a great day!", "You're very welcome. Wishing you all the best.", "Happy to help! If you need anything, just ask.", "Anytime! Don't hesitate to reach out if you need anything.", "My pleasure! I'm here to support you.", "You're welcome! Let me know if you need more help.", "No problem! Take care of yourself.", "Glad I could help! Wishing you all the best.", "You're welcome! I'm here if you need me.", "Happy to assist! Have a great day!", "You're very welcome. If you need anything, just ask.", "Anytime! Take care!", "My pleasure! Let me know if you need more help.", "No worries! I'm here whenever you need me.", "You're welcome! Take care!", "Glad to be of assistance. Have a great day!", "You're very welcome. Wishing you all the best.", "Happy to help! If you need anything, just ask.", "Anytime! Don't hesitate to reach out if you need anything.", "My pleasure! I'm here to support you.", "You're welcome! Let me know if you need more help.", "No problem! Take care of yourself.", "Glad I could help! Wishing you all the best.", "You're welcome! I'm here if you need me.", "Happy to assist! Have a great day!", "You're very welcome. If you need anything, just ask.", "Anytime! Take care!", "My pleasure! Let me know if you need more help.", "No worries! I'm here whenever you need me.", "You're welcome! Take care!", "Glad to be of assistance. Have a great day!", "You're very welcome. Wishing you all the best.", "Happy to help! If you need anything, just ask.", "Anytime! Don't hesitate to reach out if you need anything.", "My pleasure! I'm here to support you.", "You're welcome! Let me know if you need more help.", "No problem! Take care of yourself.", "Glad I could help! Wishing you all the best.", "You're welcome! I'm here if you need me.", "Happy to assist! Have a great day!", "You're very welcome. If you need anything, just ask.", "Anytime! Take care!", "My pleasure! Let me know if you need more help.", "No worries! I'm here whenever you need me.", "You're welcome! Take care!", "Glad to be of assistance. Have a great day!", "You're very welcome. Wishing you all the best."]
    },
    emotional_support: {
        patterns: [
            "I’m feeling down", "I’m anxious", "I’m stressed", "I need support",
            "I'm sad", "I feel depressed", "I'm unhappy", "I'm worried", "I'm feeling overwhelmed", "I need someone to talk to", "I'm feeling hopeless", "I can't cope", "I'm feeling lonely", "I'm feeling lost", "I need help", "I'm feeling broken", "I'm struggling", "I'm feeling defeated", "I'm feeling empty", "I'm feeling discouraged", "I don't know what to do", "I'm feeling helpless", "I'm feeling trapped", "I'm feeling scared", "I need advice", "I'm feeling miserable", "I'm feeling worthless", "I'm feeling ashamed", "I'm feeling guilty", "I'm feeling insecure", "I'm feeling inadequate", "I'm feeling rejected", "I'm feeling unloved", "I'm feeling unworthy", "I'm feeling vulnerable", "I'm feeling anxious all the time", "I'm feeling overwhelmed with stress", "I'm feeling like I'm drowning", "I'm feeling like I'm falling apart", "I'm feeling like I'm not good enough", "I'm feeling like a failure", "I'm feeling like giving up", "I'm feeling like I'm going crazy", "I'm feeling like I'm losing control", "I'm feeling like I'm not myself", "I'm feeling like I'm on the verge of a breakdown", "I'm feeling like I'm not being heard", "I'm feeling like no one understands me", "I'm feeling like I'm carrying the weight of the world", "I'm feeling like I'm suffocating", "I'm feeling like I'm in a dark place", "I'm feeling like I'm in a hole I can't get out of", "I'm feeling like I'm in a bad place", "I'm feeling like I'm at the end of my rope", "I'm feeling like I'm at my breaking point", "I'm feeling like I'm at my wits' end", "I'm feeling like I'm running out of options", "I'm feeling like I'm in over my head", "I'm feeling like I'm on the edge", "I'm feeling like I'm about to explode", "I'm feeling like I'm losing my mind", "I'm feeling like I'm falling apart at the seams", "I'm feeling like I'm coming apart", "I'm feeling like I'm cracking up", "I'm feeling like I'm losing it", "I'm feeling like I'm on the verge of tears", "I'm feeling like I'm on the brink", "I'm feeling like I'm in a constant state of panic", "I'm feeling like I'm in a constant state of anxiety", "I'm feeling like I'm in a constant state of worry", "I'm feeling like I'm in a constant state of fear", "I'm feeling like I'm in a constant state of stress", "I'm feeling like I'm in a constant state of tension", "I'm feeling like I'm in a constant state of depression", "I'm feeling like I'm in a constant state of sadness", "I'm feeling like I'm in a constant state of loneliness", "I'm feeling like I'm in a constant state of despair", "I'm feeling like I'm in a constant state of hopelessness", "I'm feeling like I'm in a constant state of helplessness", "I'm feeling like I'm in a constant state of worthlessness", "I'm feeling like I'm in a constant state of shame", "I'm feeling like I'm in a constant state of guilt", "I'm feeling like I'm in a constant state of insecurity", "I'm feeling like I'm in a constant state of inadequacy", "I'm feeling like I'm in a constant state of rejection", "I'm feeling like I'm in a constant state of being unloved", "I'm feeling like I'm in a constant state of being unworthy", "I'm feeling like I'm in a constant state of vulnerability", "I'm feeling like I'm in a constant state of anxiety and stress", "I'm feeling like I'm in a constant state of stress and worry", "I'm feeling like I'm in a constant state of worry and fear", "I'm feeling like I'm in a constant state of fear and tension", "I'm feeling like I'm in a constant state of tension and anxiety", "I'm feeling like I'm in a constant state of anxiety and worry", "I'm feeling like I'm in a constant state of worry and stress", "I'm feeling like I'm in a constant state of stress and tension", "I'm feeling like I'm in a constant state of tension and fear", "I'm feeling like I'm in a constant state of fear and anxiety", "I'm feeling like I'm in a constant state of anxiety and depression", "I'm feeling like I'm in a constant state of depression and sadness", "I'm feeling like I'm in a constant state of sadness and loneliness", "I'm feeling like I'm in a constant state of loneliness and despair", "I'm feeling like I'm in a constant state of despair and hopelessness", "I'm feeling like I'm in a constant state of hopelessness and helplessness", "I'm feeling like I'm in a constant state of helplessness and worthlessness", "I'm feeling like I'm in a constant state of worthlessness and shame", "I'm feeling like I'm in a constant state of shame and guilt", "I'm feeling like I'm in a constant state of guilt and insecurity", "I'm feeling like I'm in a constant state of insecurity and inadequacy", "I'm feeling like I'm in a constant state of inadequacy and rejection", "I'm feeling like I'm in a constant state of rejection and being unloved", "I'm feeling like I'm in a constant state of being unloved and unworthy", "I'm feeling like I'm in a constant state of being unworthy and vulnerable"],
        responses: [
            "I’m really sorry you’re feeling this way. Do you want to talk about what’s been going on?",
            "It’s okay to feel this way. Sometimes talking about it can help. What’s on your mind?",
            "I’m here to listen. What’s been bothering you lately?",
            "It sounds like you’re going through a tough time. How can I support you right now?",
            "I understand that things are tough right now. Would you like to share what's on your mind?",
            "I'm here for you. It's okay to not be okay. What can I do to help?",
            "It’s perfectly fine to feel like this. Would you like to talk more about it?",
            "Sometimes sharing your feelings can make a big difference. What’s troubling you?",
            "You’re not alone in this. How can I assist you in feeling better?",
            "I'm really sorry you're feeling this way. Would talking about it help?",
            "It’s okay to express what you’re feeling. What’s on your mind?",
            "I'm here to support you. What's been going on?",
            "It sounds like you're dealing with a lot right now. How can I be there for you?",
            "I know it's tough, but you're not alone. What would you like to share?",
            "I'm here to listen whenever you're ready. What's been troubling you?",
            "I'm really sorry you're going through this. What can I do to help?",
            "It's okay to feel like this sometimes. Would talking about it help?",
            "I'm here for you. What's been going on?",
            "It sounds like things are difficult right now. How can I support you?",
            "I'm sorry you're feeling this way. Would you like to talk more about it?",
            "I'm here to listen and help in any way I can. What's on your mind?",
            "It’s okay to not be okay. How can I support you right now?",
            "I'm really sorry you're feeling this way. What can I do to help?",
            "It's tough to go through this. Would you like to share what's been going on?",
            "I'm here to listen and support you. What’s been troubling you?",
            "It’s okay to feel this way. Do you want to talk about what’s been on your mind?",
            "I’m really sorry you’re feeling like this. How can I assist you right now?",
            "I'm here for you, no matter what. What’s been going on?",
            "It sounds like you're going through a tough time. Would talking about it help?",
            "I understand that things are tough right now. How can I support you?",
            "I'm here to listen and help. What's been bothering you?",
            "It’s perfectly fine to feel like this. How can I assist you right now?",
            "I'm really sorry you're going through this. What can I do to help?",
            "It's okay to not be okay. Would you like to share what's been on your mind?",
            "I'm here to support you. What's been troubling you?",
            "It sounds like you're dealing with a lot. How can I assist you?",
            "I know it's tough, but you're not alone. How can I support you?",
            "I'm here to listen whenever you're ready. What’s been going on?",
            "I'm really sorry you're feeling this way. Would talking about it help?",
            "It's okay to feel this way. How can I support you right now?",
            "I'm here for you. What can I do to help?",
            "It sounds like things are difficult. Would you like to talk more about it?",
            "I'm here to listen and help in any way I can. What’s been troubling you?",
            "It’s okay to express what you’re feeling. How can I assist you?",
            "I'm here to support you. What’s on your mind?",
            "It’s okay to feel this way. What can I do to help?",
            "I’m really sorry you’re feeling like this. How can I assist you right now?",
            "I'm here to listen. What's been going on?",
            "It sounds like you're going through a tough time. How can I support you?",
            "I understand that things are tough. Would talking about it help?",
            "I'm here for you. What’s been troubling you?",
            "It’s okay to not be okay. How can I support you right now?",
            "I'm really sorry you're feeling this way. What can I do to help?",
            "It's tough to go through this. Would you like to share what's been on your mind?",
            "I'm here to listen and support you. What’s been troubling you?",
            "It’s okay to feel this way. Do you want to talk about what’s been on your mind?",
            "I’m really sorry you’re feeling like this. How can I assist you right now?",
            "I'm here for you, no matter what. What’s been going on?",
            "It sounds like you're going through a tough time. Would talking about it help?",
            "I understand that things are tough right now. How can I support you?",
            "I'm here to listen and help. What's been bothering you?",
            "It’s perfectly fine to feel like this. How can I assist you right now?",
            "I'm really sorry you're going through this. What can I do to help?",
            "It's okay to not be okay. Would you like to share what's been on your mind?",
            "I'm here to support you. What's been troubling you?",
            "It sounds like you're dealing with a lot. How can I assist you?",
            "I know it's tough, but you're not alone. How can I support you?",
            "I'm here to listen whenever you're ready. What’s been going on?",
            "I'm really sorry you're feeling this way. Would talking about it help?",
            "It's okay to feel this way. How can I support you right now?",
            "I'm here for you. What can I do to help?",
            "It sounds like things are difficult. Would you like to talk more about it?",
            "I'm here to listen and help in any way I can. What’s been troubling you?",
            "It’s okay to express what you’re feeling. How can I assist you?",
            "I'm here to support you. What’s on your mind?",
            "It’s okay to feel this way. What can I do to help?",
            "I’m really sorry you’re feeling like this. How can I assist you right now?",
            "I'm here to listen. What's been going on?",
            "It sounds like you're going through a tough time. How can I support you?",
            "I understand that things are tough. Would talking about it help?",
            "I'm here for you. What’s been troubling you?",
            "It’s okay to not be okay. How can I support you right now?",
            "I'm really sorry you're feeling this way. What can I do to help?",
            "It's tough to go through this. Would you like to share what's been on your mind?",
            "I'm here to listen and support you. What’s been troubling you?",
            "It’s okay to feel this way. Do you want to talk about what’s been on your mind?",
            "I’m really sorry you’re feeling like this. How can I assist you right now?",
            "I'm here for you, no matter what. What’s been going on?",
            "It sounds like you're going through a tough time. Would talking about it help?",
            "I understand that things are tough right now. How can I support you?",
            "I'm here to listen and help. What's been bothering you?",
            "It’s perfectly fine to feel like this. How can I assist you right now?",
            "I'm really sorry you're going through this. What can I do to help?",
            "It's okay to not be okay. Would you like to share what's been on your mind?",
            "I'm here to support you. What's been troubling you?",
            "It sounds like you're dealing with a lot. How can I assist you?",
            "I know it's tough, but you're not alone. How can I support you?",
            "I'm here to listen whenever you're ready. What’s been going on?"
        ]
    },
        "self_care": {
            "patterns": [
                "How can I take care of myself?", "What are some self-care tips?", "I need some self-care ideas",
                "What are some ways to practice self-care?", "How can I relax after a stressful day?", 
                "Can you give me some tips for self-care?", "What can I do for myself today?", "How can I de-stress?", 
                "What are some easy self-care activities?", "How do I practice mindfulness?", "What are some self-care routines?", 
                "I need help with self-care ideas.", "How can I take better care of myself?", "What are some relaxing activities?", 
                "How can I unwind after a busy week?", "What are some self-care practices for mental health?", 
                "How can I integrate self-care into my daily routine?", "What are some ways to show self-compassion?", 
                "How can I manage stress effectively?", "What are some self-care activities for the weekend?","Tell me ways to relax","WHat can I do to relax?","Anything I can do to relax?","Anything I can do to relax.","Anything I can do to relax"
            ],
            "responses": [
                "Self-care is important. How about starting with a relaxing activity you enjoy, like reading or taking a walk?",
                "Consider doing something kind for yourself today, whether it’s a hobby or just taking some quiet time.",
                "Self-care can include things like exercise, talking to a friend, or just taking a few deep breaths. What sounds good to you?",
                "Remember to take care of your mental health as well. Simple things like journaling or meditation can make a difference.",
                "Try taking a break and doing something you love, like reading or taking a bath.",
                "Consider setting aside some time for relaxation, such as practicing yoga or meditating.",
                "Self-care could be as simple as getting some fresh air or enjoying a favorite hobby.",
                "Give yourself permission to take a nap or have a moment of quiet to recharge.",
                "Engage in activities that make you happy, whether it’s crafting, listening to music, or walking.",
                "Prioritize your well-being by setting boundaries and taking time for yourself.",
                "Consider writing in a journal or practicing deep breathing exercises to help manage stress.",
                "Take a moment to reflect on things that make you feel good and incorporate them into your day.",
                "Don’t forget to stay hydrated and eat nourishing foods as part of your self-care routine.",
                "Sometimes, simply talking to a friend or loved one can be a great way to practice self-care.",
                "Treat yourself to a small indulgence, like a favorite treat or a relaxing bath.",
                "Consider engaging in physical activity, like a workout or a walk, to boost your mood.",
                "Make time for hobbies or interests that bring you joy and satisfaction.",
                "Sometimes, taking a break from screens and spending time outdoors can be refreshing.",
                "Self-care can also mean getting enough sleep and creating a restful environment.",
                "Explore new activities or practices that you haven’t tried before and see what resonates with you.",
                "Sometimes, simply taking a moment to breathe deeply and be present can be very calming.",
                "Set small, achievable goals for yourself and celebrate your progress.",
                "Consider using relaxation techniques, like progressive muscle relaxation or guided imagery.",
                "Engage in creative activities, like painting or writing, to express yourself and unwind.",
                "Practice gratitude by reflecting on things you’re thankful for each day.",
                "Connect with nature by spending time in a park or garden.",
                "Create a calming bedtime routine to help you wind down and sleep better.",
                "Pamper yourself with a spa day at home, complete with a face mask and soothing music.",
                "Dedicate time to a hobby you’ve always wanted to try but haven’t gotten around to yet.",
                "Engage in social activities that make you feel connected and supported.",
                "Listen to your favorite music or a podcast to lift your spirits.",
                "Find a balance between work and relaxation to maintain your overall well-being.",
                "Sometimes, a change of scenery or a mini-adventure can be refreshing and rejuvenating.",
                "Engage in positive self-talk and affirmations to boost your self-esteem and mindset.",
                "Consider setting aside time each week for activities that you find fulfilling and enjoyable.",
                "Create a cozy, comforting space in your home where you can retreat and relax.",
                "Practice mindfulness by paying attention to the present moment without judgment.",
                "Take a moment to reflect on your achievements and be kind to yourself.",
                "Consider setting boundaries to protect your mental and emotional well-being.",
                "Engage in activities that promote relaxation, such as deep breathing or gentle stretching.",
                "Find ways to incorporate relaxation techniques into your daily routine.",
                "Sometimes, a simple change in routine can provide a refreshing boost to your self-care efforts.",
                "Consider seeking out support groups or online communities that resonate with your experiences.",
                "Remember that self-care is a personal journey; find what works best for you and embrace it.",
                "Create a self-care plan that includes activities you enjoy and that help you feel rejuvenated.",
                "Explore new relaxation techniques, like aromatherapy or guided meditation.",
                "Sometimes, taking a step back and reassessing your priorities can help improve your well-being.",
                "Engage in physical activities that make you feel good, such as dancing or stretching.",
                "Consider practicing mindfulness through activities like coloring or puzzles.",
                "Make time for activities that help you unwind and disconnect from daily stresses.",
                "Find joy in small, everyday moments and incorporate them into your self-care routine.",
                "Create a self-care checklist to ensure you’re taking care of your mental, physical, and emotional needs.",
                "Explore ways to enhance your self-care practice by trying out new activities and routines.",
                "Remember to be patient with yourself and acknowledge the importance of taking care of your well-being."
            ]
        },
        "resources": {
            "patterns": [
                "Where can I find help?", "I need professional support", "Can you recommend resources?",
                "Where can I find mental health resources?", "I need a therapist or counselor.", 
                "Can you suggest mental health resources?", "How can I find support for mental health issues?", 
                "What are some good resources for mental health?", "Can you help me find professional support?", 
                "I’m looking for mental health helplines.", "Where can I get help for anxiety or depression?", 
                "Do you have any recommendations for support groups?", "Can you find some resources for coping with stress?",
                "What resources are available for mental health support?", "I need information on finding a therapist.", 
                "Can you help me locate mental health support?", "What are some trusted mental health resources?", 
                "Where can I access mental health services?", "How can I connect with a mental health professional?", 
                "What support options are available for mental health?"
            ],
            "responses": [
                "If you’re looking for professional help, consider reaching out to a licensed therapist or counselor.",
                "There are many resources available, such as helplines or support groups. Would you like me to find some for you?",
                "It might be helpful to connect with a mental health professional. Let me know if you need assistance finding resources.",
                "For immediate support, there are crisis helplines available. I can provide contact information if you need it.",
                "You might find support through mental health organizations or online directories for licensed professionals.",
                "Consider looking into local counseling centers or online therapy services for professional support.",
                "There are numerous mental health resources available, including crisis helplines and support groups.",
                "I can help you find information on mental health professionals or support services if you need it.",
                "Check out reputable websites or local resources that provide information on mental health services.",
                "If you're in immediate need of help, there are crisis lines available that offer 24/7 support.",
                "Many communities offer mental health support through local clinics and online platforms. Would you like me to find some for you?",
                "For immediate assistance, crisis helplines and emergency services are available. Let me know if you need specific contact information.",
                "There are support groups and online communities that can offer valuable connections and resources.",
                "You can often find helpful resources by contacting local mental health organizations or searching online for reputable services.",
                "Consider reaching out to your healthcare provider for recommendations on mental health professionals.",
                "You can find online therapy platforms that offer counseling and support from licensed therapists.",
                "Look for mental health apps that provide resources and tools for managing stress and anxiety.",
                "Check if your local library or community center has information on mental health resources and support services.",
                "Explore online forums or social media groups that focus on mental health and well-being.",
                "Many universities and colleges offer counseling services to students and may have resources available.",
                "Consider contacting national mental health organizations for information on support and resources.",
                "Online directories can help you find licensed therapists and counselors in your area.",
                "Reach out to your insurance provider for a list of covered mental health professionals and services.",
                "Support groups and therapy sessions can often be found through community health centers.",
                "Look into mental health podcasts or webinars that offer valuable insights and resources.",
                "Seek out local mental health workshops or seminars that provide support and information.",
                "Consider using online search tools to find mental health resources specific to your needs.",
                "Check if your workplace offers employee assistance programs with mental health support.",
                "You can often find mental health resources through local non-profit organizations and charities.",
                "Explore online mental health communities where you can connect with others and share experiences.",
                "Many hospitals and clinics offer mental health services and can provide referrals to professionals.",
                "Local religious or spiritual organizations may offer counseling and support services.",
                "Consider looking into mental health advocacy groups that provide resources and support.",
                "Check out online directories for mental health professionals, which often include reviews and ratings.",
                "Contact local mental health organizations for information on available resources and support options.",
                "Look for national helplines that offer confidential support for mental health concerns.",
                "Online platforms may offer virtual support groups and counseling sessions for various needs.",
                "Explore mental health resources provided by local government or community health agencies.",
                "Consider reaching out to community centers for information on mental health workshops and resources.",
                "You can often find mental health services through local medical providers and clinics.",
                "Look for online mental health courses or webinars that offer educational resources and support.",
                "Check if there are any mental health fairs or events in your area that provide resources and information.",
                "Explore resources provided by mental health foundations and advocacy organizations.",
                "Seek out peer support groups that offer shared experiences and resources for mental well-being.",
                "Consider using online mental health resource directories to find professionals and support services.",
                "Look for mental health blogs and websites that offer valuable tips and resources.",
                "Reach out to local support organizations for information on mental health resources and assistance.",
                "Many mental health organizations offer online tools and resources for managing mental health concerns.",
                "Explore online counseling platforms that offer flexible and accessible support options.",
                "Check out local community health boards for information on mental health services and support.",
                "Consider using mental health apps that provide resources and tools for managing stress and anxiety.",
                "Look into mental health services offered through local hospitals and healthcare providers.",
                "Explore online forums and groups dedicated to mental health support and resources.",
                "Seek recommendations from friends, family, or healthcare providers for trusted mental health resources."
            ]
        },
        "funny": {
            "patterns": [
                "Tell me a joke!", "Tell me something funny!", "Do you know a joke?", "Share a funny story!",
                "I could use a laugh. Got any jokes?", "Tell me a joke to lighten the mood.", "Share a hilarious joke.",
                "Tell me something that will make me smile.", "Got any good jokes?", "Can you share a funny joke?",
                "I’m in the mood for a joke. Got any?", "Tell me a joke that will cheer me up.", "I need a good laugh. Any jokes?",
                "Got any funny jokes to share?", "Make me laugh with a joke.", "Tell me a joke that’s sure to make me smile.",
                "Share a funny joke with me.", "Can you tell me a joke that will brighten my day?", "I’m looking for a funny joke.",
                "Give me a joke that will make me chuckle.","Make me laugh","Make me smile","make me laugh","make me smile","cheer me up"
                ,"help me with my stress"
            ],
            "responses": [
                "Here’s a light-hearted joke: Why don’t scientists trust atoms? Because they make up everything!",
                "I hope this brings a smile: Why did the scarecrow win an award? Because he was outstanding in his field!",
                "Here’s a funny one for you: What do you call fake spaghetti? An impasta!",
                "Laughter can be good for the soul. Here’s a joke: Why was the math book sad? Because it had too many problems.",
                "Why did the bicycle fall over? It was two-tired!",
                "Why did the golfer bring two pairs of pants? In case he got a hole in one!",
                "What do you call cheese that isn't yours? Nacho cheese!",
                "Why don't skeletons fight each other? They don't have the guts!",
                "What did one ocean say to the other ocean? Nothing, they just waved.",
                "Why did the tomato turn red? Because it saw the salad dressing!",
                "What’s orange and sounds like a parrot? A carrot!",
                "Why did the scarecrow become a successful neurosurgeon? Because he was outstanding in his field!",
                "What do you call a bear with no teeth? A gummy bear!",
                "Why was the computer cold? It left its Windows open!",
                "Why don’t scientists trust atoms? Because they make up everything!",
                "How does a penguin build its house? Igloos it together!",
                "What did the janitor say when he jumped out of the closet? Supplies!",
                "What do you call a fish with no eyes? Fsh!",
                "What did the grape do when it got stepped on? Nothing but let out a little wine!",
                "Why did the chicken join a band? Because it had the drumsticks!",
                "Why can't your nose be 12 inches long? Because then it would be a foot!",
                "What do you get when you cross a snowman and a vampire? Frostbite!",
                "How do you catch a squirrel? Climb a tree and act like a nut!",
                "Why did the golfer bring extra pants? In case he got a hole in one!",
                "What kind of shoes do ninjas wear? Sneakers!",
                "What do you call a can opener that doesn’t work? A can’t opener!",
                "Why was the math book sad? It had too many problems.",
                "How do you organize a space party? You planet!",
                "What did the zero say to the eight? Nice belt!",
                "Why was the computer so smart? It had a lot of bytes!",
                "Why do cows wear bells? Because their horns don’t work!",
                "What do you get when you cross a snowman and a dog? Frostbite!",
                "How does a vampire start a letter? Tomb it may concern.",
                "What did the left eye say to the right eye? Between you and me, something smells!",
                "What do you get when you cross a dinosaur with a pig? Jurassic Pork!",
                "Why did the bicycle fall over? It was two-tired!",
                "What’s brown and sticky? A stick!",
                "Why did the scarecrow win an award? Because he was outstanding in his field!",
                "What do you call a pile of cats? A meowtain!",
                "What’s black and white and read all over? A newspaper!",
                "Why did the coffee file a police report? It got mugged!",
                "What’s the best thing about Switzerland? I don’t know, but the flag is a big plus!",
                "How do you make a tissue dance? Put a little boogie in it!",
                "Why did the stadium get hot after the game? All of the fans left!",
                "What’s a skeleton’s least favorite room in the house? The living room!",
                "Why don’t you ever see elephants hiding in trees? Because they’re so good at it!",
                "What do you call a sleeping bull? A bulldozer!",
                "What did the big flower say to the little flower? Hey, bud!",
                "How do cows stay up to date with current events? They read the moos-paper!",
                "What do you call a pile of kittens? A meowtain!"
            ]
        }
    }   


async function sendMessage() {
    const inputField = document.getElementById('chat-input');
    const message = inputField.value.trim();

    if (message) {
        displayMessage(message, 'user-message');
        inputField.value = '';

        // Display typing indicator
        displayTypingIndicator();

        // Process the user message and get a response
        const response = getBotResponse(message);

        // Simulate processing time
        setTimeout(() => {
            removeTypingIndicator();
            displayMessage(response, 'bot-message');
        }, 1000); // 1-second delay
    }
}

function getBotResponse(message) {
    const lowerCaseMessage = message.toLowerCase();

    // Check each intent for a match
    for (const [tag, { patterns, responses }] of Object.entries(intents)) {
        for (const pattern of patterns) {
            // Use a case-insensitive match for patterns
            const regex = new RegExp(pattern, 'i');
            if (regex.test(lowerCaseMessage)) {
                // Return a random response from the matching intent
                return responses[Math.floor(Math.random() * responses.length)];
            }
        }
    }

    // Additional pattern for general emotion detection
    if (containsEmotionKeywords(lowerCaseMessage)) {
        return "It sounds like you're experiencing some strong emotions. I'm here to help. Can you tell me more about what's going on?";
    }

    // Check for keywords indicating a need for resources or professional support
    if (containsResourceKeywords(lowerCaseMessage)) {
        return "It sounds like you're seeking some help. Here's a link to a website where you can find licensed therapists: [Find a Therapist](https://www.psychologytoday.com/us/therapists).";
    }

    // Default response if no intent matches
    return "I'm here to support you. Can you tell me more about how you're feeling?";
}

function containsEmotionKeywords(message) {
    const emotionKeywords = ["stressed", "anxious", "sad", "depressed", "unhappy", "worried", "angry", "lonely", "help", "support", "life"];
    return emotionKeywords.some(keyword => message.includes(keyword));
}

function containsResourceKeywords(message) {
    const resourceKeywords = ["therapist", "counselor", "help", "support", "mental health", "professional"];
    return resourceKeywords.some(keyword => message.includes(keyword));
}

function displayMessage(message, className) {
    const chatWindow = document.getElementById('chat-window');
    const messageContainer = document.createElement('div');
    messageContainer.className = `chat-message ${className}`;
    messageContainer.innerHTML = `<p>${message}</p>`;
    chatWindow.appendChild(messageContainer);
    chatWindow.scrollTop = chatWindow.scrollHeight;
}

function displayTypingIndicator() {
    const chatWindow = document.getElementById('chat-window');
    const typingIndicator = document.createElement('div');
    typingIndicator.className = 'chat-message bot-message typing-indicator';
    typingIndicator.innerHTML = '<p>Bot is typing...</p>';
    typingIndicator.id = 'typing-indicator';
    chatWindow.appendChild(typingIndicator);
    chatWindow.scrollTop = chatWindow.scrollHeight;
}

function removeTypingIndicator() {
    const typingIndicator = document.getElementById('typing-indicator');
    if (typingIndicator) {
        typingIndicator.remove();
    }
}

function checkEnter(event) {
    if (event.key === 'Enter') {
        sendMessage();
    }
}
