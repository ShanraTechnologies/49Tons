//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace App.Models
{
    using System;
    using System.Collections.Generic;
    
    public partial class CompanyProfile
    {
        public int Id { get; set; }
        public string CompanyName { get; set; }
        public string CompanyRegNum { get; set; }
        public Nullable<int> OwnerId { get; set; }
    }
}
