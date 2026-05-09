export const generateStoryContent = async (prompt, systemMessage) => {
  try {
    const response = await fetch('/api/generate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ prompt, systemMessage }),
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();
    return data.result;
  } catch (error) {
    console.error('Error generating content:', error);
    return null;
  }
};
