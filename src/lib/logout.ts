export async function logoutClient() {
  // Remove cookies on client side
  document.cookie = 'sb-access-token=; Path=/; Max-Age=0;';
  document.cookie = 'sb-refresh-token=; Path=/; Max-Age=0;';
}
