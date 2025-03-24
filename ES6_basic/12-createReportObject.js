export default function createReportObject(employeesList) {
	return {
	  allEmployees: employeesList, // allEmployees contient les départements et les employés
	  getNumberOfDepartments: function() {
		return Object.keys(this.allEmployees).length; // Nombre de départements
	  },
	};
  }
