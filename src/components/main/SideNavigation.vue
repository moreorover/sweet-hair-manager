<template>
  <aside class="menu is-hidden-mobile">
    <p class="menu-label">
      General
    </p>
    <ul class="menu-list">
      <li><router-link :to="{ name: 'Dashboard' }">Dashboard</router-link></li>
      <li><router-link :to="{ name: 'Customers' }">Customers</router-link></li>
      <li><a>Other</a></li>
    </ul>
    <p class="menu-label">
      Administration
    </p>
    <ul class="menu-list">
      <li><a>Team Settings</a></li>
      <li>
        <a>Manage Your Team</a>
        <ul>
          <li><a>Members</a></li>
          <li><a>Plugins</a></li>
          <li><a>Add a member</a></li>
          <li><a>Remove a member</a></li>
        </ul>
      </li>
      <li><a>Invitations</a></li>
      <li><a>Cloud Storage Environment Settings</a></li>
      <li><a>Authentication</a></li>
      <li><a>Payments</a></li>
    </ul>
    <p class="menu-label">
      Transactions
    </p>
    <ul class="menu-list">
      <li><a>Payments</a></li>
      <li><a>Transfers</a></li>
      <li><a>Balance</a></li>
      <li><a>Reports</a></li>
    </ul>
  </aside>
</template>

<script>
export default {
  name: 'SideNavigation',
}
</script>

<style scoped></style>
