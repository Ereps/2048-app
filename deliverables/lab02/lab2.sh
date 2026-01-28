# Install dependencies
pnpm install

# Check static type
echo "TypeChecking: "
# run pnpm typecheck and fail if there are errors
pnpm typecheck


pnpm eslint

