//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace Models
{
    using System;
    using System.Collections.Generic;
    
    public partial class Group
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public Group()
        {
            this.GroupDetails = new HashSet<GroupDetail>();
        }
    
        public int Id { get; set; }
        public Nullable<int> Teacher_id { get; set; }
        public string Room { get; set; }
        public string Semester { get; set; }
        public string Schedule { get; set; }
        public Nullable<int> Subject_id { get; set; }
        public string Title { get; set; }
    
        public virtual Subject Subject { get; set; }
        public virtual Teacher Teacher { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<GroupDetail> GroupDetails { get; set; }
    }
}