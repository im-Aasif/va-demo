<template>
  <div class="about">
    <h1>About This Project</h1>
    <p>
      This is a demonstration of a modern static web application built with cutting-edge frontend
      technologies.
    </p>

    <div class="tech-stack">
      <h2>Technology Stack</h2>

      <div class="tech-item">
        <h3>Build Tool</h3>
        <p>
          <strong>Vite 7</strong> - Next generation frontend tooling with instant HMR and
          lightning-fast builds using esbuild and Rollup.
        </p>
      </div>

      <div class="tech-item">
        <h3>Framework</h3>
        <p>
          <strong>Vue 3</strong> - Progressive framework with Composition API, improved TypeScript
          support, and better performance.
        </p>
      </div>

      <div class="tech-item">
        <h3>Language</h3>
        <p>
          <strong>TypeScript</strong> - Strongly typed superset of JavaScript for better tooling and
          fewer runtime errors.
        </p>
      </div>

      <div class="tech-item">
        <h3>Routing</h3>
        <p>
          <strong>Vue Router 5</strong> - Official router with hash-based history mode for seamless
          GitHub Pages compatibility.
        </p>
      </div>

      <div class="tech-item">
        <h3>Package Manager</h3>
        <p>
          <strong>pnpm</strong> - Fast, disk space efficient package manager with strict dependency
          resolution.
        </p>
      </div>

      <div class="tech-item">
        <h3>Deployment</h3>
        <p>
          <strong>GitHub Actions</strong> - Automated CI/CD pipeline that builds and deploys on
          every push to main branch.
        </p>
      </div>
    </div>

    <div class="actions">
      <RouterLink to="/" class="button"> ← Back to Home </RouterLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<style scoped>
.about {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
}

h1 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  text-align: center;
  color: #35495e;
}

.about > p {
  font-size: 1.2rem;
  color: #666;
  text-align: center;
  margin-bottom: 2rem;
}

.tech-stack {
  margin: 2rem 0;
}

.tech-stack > h2 {
  font-size: 1.8rem;
  margin-bottom: 1.5rem;
  text-align: center;
  color: #42b883;
}

.tech-item {
  margin-bottom: 1.5rem;
  padding: 1.5rem;
  background: #f8f9fa;
  border-radius: 0.5rem;
  border-left: 4px solid #42b883;
}

.tech-item h3 {
  font-size: 1.3rem;
  margin-bottom: 0.5rem;
  color: #35495e;
}

.tech-item p {
  font-size: 1rem;
  line-height: 1.6;
  color: #555;
  margin: 0;
}

.tech-item strong {
  color: #42b883;
}

.actions {
  margin-top: 2rem;
  text-align: center;
}

.button {
  display: inline-block;
  padding: 0.8rem 2rem;
  background: #35495e;
  color: white;
  text-decoration: none;
  border-radius: 0.5rem;
  font-size: 1.1rem;
  transition: background 0.3s;
}

.button:hover {
  background: #42b883;
}
</style>
