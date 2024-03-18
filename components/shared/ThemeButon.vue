<script>
export default {
  mounted() {
    const initUserTheme = this.getMediaPreference();
    this.setTheme(initUserTheme);
  },

  data() {
    return {
      userTheme: "dark-theme",
    };
  },

  methods: {
    toggleTheme() {
      const activeTheme = localStorage.getItem("user-theme");
      if (activeTheme === "light-theme") {
        this.setTheme("dark-theme");
      } else {
        this.setTheme("light-theme");
      }
    },

    setTheme(theme) {
      localStorage.setItem("user-theme", theme);
      this.userTheme = theme;
      document.documentElement.className = theme;
    },

    getMediaPreference() {
      const hasDarkPreference = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      if (hasDarkPreference) {
        return "dark-theme";
      } else {
        return "light-theme";
      }
    },
  },
};
</script>

<template>
  <div class="inner">
    <div class="theme-btn" id="theme-btn">
      <input
        @change="toggleTheme"
        id="checkbox"
        type="checkbox"
        class="switch-checkbox"
      />
      <label for="checkbox" class="switch-label">
        <span title="Thème Sombre" class="dark-icon"
          ><img src="../../public/assets/icons/icons8-moon-50.png"
        /></span>

        <span title="Thème Clair" class="light-icon"
          ><img src="../../public/assets/icons/icons8-sun-30.png"
        /></span>
        <div
          class="switch-toggle"
          :class="{ 'switch-toggle-checked': userTheme === 'dark-theme' }"
        ></div>
      </label>
    </div>
  </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.theme-btn {
  padding-inline-start: 1em;
  padding-inline-end: 2.2em;
  padding-top: 1em;
  position: fixed;
  bottom: 20px;
  right: 0px;
  z-index: 9999999999;
}

.switch-checkbox {
  display: none;
}

.switch-label {
  align-items: center;
  background: var(--background-color-secondary);
  border-radius: var(--element-size);
  cursor: pointer;
  display: flex;
  font-size: calc(var(--element-size) * 0.35);
  height: calc(var(--element-size) * 0.45);
  position: relative;
  transition: background 0.5s ease;
  justify-content: space-between;
  width: var(--element-size);
  z-index: 1;
}

.switch-toggle {
  position: absolute;
  background-color: var(--background-color-primary);
  border-radius: 50%;
  left: calc(var(--element-size) * 0.02);
  height: calc(var(--element-size) * 0.4);
  width: calc(var(--element-size) * 0.4);
  transform: translateX(0);
  transition: transform 0.3s ease, background-color 0.5s ease;
}

.switch-toggle-checked {
  transform: translateX(calc(var(--element-size) * 0.5)) !important;
}

.dark-icon img,
.light-icon img {
  width: 22px;
}

.light-icon,
.dark-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: inherit;
}
</style>
