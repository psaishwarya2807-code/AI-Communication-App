<!DOCTYPE html>
<html>
<head>
  <title>AI Communication Skill Builder</title>

  <!-- Face API -->
  <script defer src="https://cdn.jsdelivr.net/npm/face-api.js"></script>

  <style>
    body {
      font-family: Arial;
      text-align: center;
      background: #eef2f7;
    }
    button {
      padding: 10px;
      margin: 8px;
      border-radius: 8px;
      cursor: pointer;
    }
    video {
      border-radius: 10px;
      margin-top: 10px;
    }
    p {
      font-size: 18px;
    }
  </style>
</head>

<body>

<h1>🎤 AI Communication Skill Builder</h1>

<!-- Voice -->
<button onclick="startVoice()">🎤 Start Speaking</button>
<p id="text"></p>

<!-- Grammar -->
<button onclick="checkGrammar()">✔ Grammar Check</button>
<p id="grammar"></p>

<!-- Confidence -->
<button onclick="confidenceScore()">📊 Confidence Score</button>
<p id="confidence"></p>

<!-- Emotion Detection -->
<h3>😊 Emotion Detection</h3>
<video id="video" width="320" height="240" autoplay muted></video>
<p id="emotion">Detecting...</p>

<!-- Feedback -->
<button onclick="generateFeedback()">💡 Get Feedback</button>
<p id="feedback"></p>

<!-- Workplace Skills -->
<button onclick="workplaceTips()">🏢 Workplace Tips</button>
<p id="tips"></p>

<!-- Certificate -->
<button onclick="generateCertificate()">📜 Download Certificate</button>

<!-- Link JS file -->
<script src="script.js"></script>

</body>
</html>
