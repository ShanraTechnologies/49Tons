using App.Models;
using Microsoft.AspNet.Identity;
using Microsoft.AspNet.Identity.EntityFramework;
using System;

namespace App
{
    public partial class logging : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            //var userStore = new UserStore<IdentityUser>();
            //var UserManager = new UserManager<IdentityUser>(userStore);
     
            //var roleManager = new RoleManager<IdentityRole>(new RoleStore<IdentityRole>(new ApplicationDbContext()));
            //if (!roleManager.RoleExists("SuperAdmin"))
            //    roleManager.Create(new IdentityRole("SuperAdmin"));

            try
            {
                //var user = UserManager.FindByName("koundinya@49tons.com");
                //UserManager.AddToRole(user.Id, "SuperAdmin");
            }
            catch
            {
                throw;
            }
        }

        //protected override void OnInit(EventArgs e)
        //{
        //    Button b = new Button();
        //    b.CssClass = "btn btn-primary block full-width m-b";
        //    b.ID = "Button";
        //    b.Text = "Login";

        //    b.Click += new EventHandler(b_Click);
        //    form1.Controls.Add(b);
        //}

        //void b_Click(object sender, EventArgs e)
        //{
        //    var userStore = new UserStore<IdentityUser>();

        //    TextBox tbUserName = (TextBox)form1.FindControl("username");
        //    TextBox tbPassword = (TextBox)form1.FindControl("password");

        //    string userName = tbUserName.Text;
        //    string password = tbPassword.Text;

        //    var userManager = new UserManager<IdentityUser>(userStore);

        //    IdentityUser user = null;

        //    Regex rgx = new Regex(@"^\d{10}$"); //10 digit mobile number

        //    if (rgx.IsMatch(userName))
        //    {
        //        using (ubietydbEntities db = new ubietydbEntities())
        //        {
        //            string authUserId;
        //            Employee emp = (from recordset in db.Employees where recordset.PrimaryMobile.ToString() == userName select recordset).FirstOrDefault();
        //            if (emp != null)
        //            {
        //                authUserId = emp.AuthUserId;
        //                user = userManager.FindById(authUserId);
        //            }
        //        }
        //    }
        //    else
        //    {
        //        user = userManager.Find(userName, password);
        //    }

        //    if (user != null)
        //    {
        //        var authenticationManager = HttpContext.Current.GetOwinContext().Authentication;
        //        var userIdentity = userManager.CreateIdentity(user, DefaultAuthenticationTypes.ApplicationCookie);

        //        authenticationManager.SignIn(new AuthenticationProperties() { IsPersistent = false }, userIdentity);

        //        Response.Redirect("~/loggingin.aspx");
        //    }


        //}
    }
}