const submitBtn = document.getElementById('submitBtn');
const moodInput = document.getElementById('moodInput');
const workoutSuggestion = document.getElementById('workoutSuggestion');
const loader = document.getElementById('loader');

submitBtn.addEventListener('click', async () => {
  const moodText = moodInput.value.trim();

  if (!moodText) {
    workoutSuggestion.textContent = 'Please describe your mood!';
    return;
  }

  // Show loader
  loader.style.display = 'block';
  workoutSuggestion.textContent = '';

  // Simulate AI API call (replace with actual API integration)
  setTimeout(async () => {
    try {
      // Replace this with your AI API call
      const workout = await getWorkoutSuggestionFromAI(moodText);

      // Display workout suggestion
      workoutSuggestion.innerHTML = `<strong>Workout Recommendation:</strong><br>${workout}`;
    } catch (error) {
      workoutSuggestion.textContent = 'Failed to fetch workout suggestion. Please try again.';
    } finally {
      // Hide loader
      loader.style.display = 'none';
    }
  }, 1000); // Simulate API delay
});

// Mock AI function (replace with actual API integration)
async function getWorkoutSuggestionFromAI(moodText) {
  // Example: Use OpenAI's GPT API or another AI service
  // For now, return a mock response based on mood
  if (moodText.toLowerCase().includes('stress')) {
    return "Try a 20-minute yoga session to relax and clear your mind.";
  } else if (moodText.toLowerCase().includes('happy')) {
    return "Go for a 30-minute run to celebrate your good mood!";
  } else if (moodText.toLowerCase().includes('sad')) {
    return "Do a 15-minute dance workout to lift your spirits.";
  } else if (moodText.toLowerCase().includes('angry')) {
    return "Release your energy with a high-intensity interval training (HIIT) session.";
  } else {
    return "Take a 10-minute walk to refresh your mind and body.";
  }
}
