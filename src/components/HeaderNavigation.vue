<template>
  <header class="wrapper">
    <nav class="wrapper__navigation" id="header_navigation"></nav>
    <div class="wrapper__login" id="header_login"></div>
  </header>
</template>

<style>
.wrapper {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 20px;
}
.wrapper__login,
.wrapper__navigation {
  display: flex;
}
</style>
