const current_users: string[] = ["Omair ", "Shahzain", "Rahul", "Afsar", "Admin"];
const new_users: string[] = ["Saad ", "Gandhi", "Rahul", "Admin", "Afsar"];
for (var i = 0; i < new_users.length; i++) {
  if (current_users.includes(new_users[i]) ) {
    console.log("enter new username");
  } else console.log("username is available");
}
