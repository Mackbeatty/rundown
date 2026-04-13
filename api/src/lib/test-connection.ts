import supabase from "./supabase.js";

const { count, error } = await supabase
  .from("users")
  .select("*", { count: "exact", head: true });

if (error) {
  console.error("Connection failed:", error.message);
  process.exit(1);
}

console.log(`Connection successful, users count: ${count}`);
