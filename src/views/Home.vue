<template>
  <div class="home">
    <h1>Welcome to Your Vue App</h1>
    <p>This is a modern Vue 3 + TypeScript + Vite static site hosted on GitHub Pages.</p>
    
    <div class="features">
      <h2>Features</h2>
      <ul>
        <li>⚡️ Vite 7 - Lightning fast build tool</li>
        <li>🎯 Vue 3 - Progressive JavaScript framework</li>
        <li>📘 TypeScript - Type-safe development</li>
        <li>🛣️ Vue Router 5 - Client-side routing with hash mode</li>
        <li>🚀 GitHub Actions - Automated deployment</li>
        <li>📦 pnpm - Fast, efficient package manager</li>
      </ul>
    </div>

    <div class="actions">
      <RouterLink to="/about" class="button">
        Learn More →
      </RouterLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<style scoped>
.home {
  text-align: center;
  padding: 2rem;
}

h1 {
  font-size: 3rem;
  margin-bottom: 1rem;
  background: linear-gradient(135deg, #42b883 0%, #35495e 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

p {
  font-size: 1.2rem;
  color: #666;
  margin-bottom: 2rem;
}

.features {
  max-width: 600px;
  margin: 2rem auto;
  text-align: left;
}

.features h2 {
  font-size: 1.8rem;
  margin-bottom: 1rem;
  text-align: center;
}

.features ul {
  list-style: none;
  padding: 0;
}

.features li {
  padding: 0.5rem 0;
  font-size: 1.1rem;
  border-bottom: 1px solid #eee;
}

.actions {
  margin-top: 2rem;
}

.button {
  display: inline-block;
  padding: 0.8rem 2rem;
  background: #42b883;
  color: white;
  text-decoration: none;
  border-radius: 0.5rem;
  font-size: 1.1rem;
  transition: background 0.3s;
}

.button:hover {
  background: #35495e;
}
</style>
