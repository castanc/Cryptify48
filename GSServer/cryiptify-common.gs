function validateUser(email, folderName) {

  if (folderName && folderName.length > 0) {

    if (email && email.length > 0) {
      let ix = email.indexOf("@");

      if (ix > 0) {
        email = email.substr(0,ix);
        let newUser = false;
        let tabName = "Main,Uses";
        let folder = Utils.getCreateFolder(folderName);
        let ssName = email.substr(0, 1);
        let ss = Utils.getCreateSpreadSheet(folder, ssName, tabName);

        let grid = Utils.getData(ss, "Main").filter(x => x[0] == email);
        let row = [];
        let newRow = grid.length+1;
        if ( grid.length == 0)
        {
          row = [email,newRow, 1,0,new Date(), new Date()];
          ss.appendRow(row);
          newUser = true;
        }
        else 
        {
          row = grid[0];
          row[2]++;
          row[5] = new Date();
          //update row in sheet
          let ssUses = ss.getSheetByName("Uses");
          let urow = [email,new Date()];
          ssUses.appendRow(urow);

          //let range = ss.getRange(`A${row[1]}:F${row[1]}`);
          //range.setValues(row);
        }

        let user = {};
        user.Name = row[0];
        user.Id = row[1];
        user.UseCounts = row[2];
        user.Paid = row[3];
        user.FirstUse = row[4];
        user.LastUse = row[5];
        user.NewUser = newUser;
        return user;
      }

      else throw `validateUser() Invalid email address: ${email}`;
    }
    else throw "validateUser(): undefined or Empty email";
  }
  else throw `validateUser() Empty Folder Name.`;
return null;

}