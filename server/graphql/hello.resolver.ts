export const helloQueries = defineResolver({
  Query: {
    hello: () => 'Hello from auto-discovered resolver!',

    greeting: (_parent, { name }) => `Hello, ${name}!`,

    profile: (_parent, _args, context) => {
      // This will only execute if the user passes the @auth directive check
      return {
        id: '1',
        name: context.user?.name || 'Test User',
        email: context.user?.email || 'test@example.com',
        role: context.user?.role || 'USER',
        bio: 'This is a test bio',
        phone: '+1234567890',
        age: 25,
      }
    },

    adminData: () => {
      // This will only execute if the user has ADMIN role
      return 'Secret admin data'
    },
  },
})