/* eslint-disable */

export const AllTypesProps: Record<string,any> = {
	GetDataset:{

	},
	GetDatasets:{

	},
	GetOrganization:{

	},
	Mutation:{
		createOrganization:{
			input:"NewOrganization"
		},
		createDataset:{
			input:"NewDataset"
		}
	},
	NewDataset:{

	},
	NewOrganization:{

	},
	PathType: "enum" as const,
	Query:{
		organization:{
			input:"GetOrganization"
		},
		datasets:{
			input:"GetDatasets"
		},
		dataset:{
			input:"GetDataset"
		}
	},
	Time: `scalar.Time` as const
}

export const ReturnTypes: Record<string,any> = {
	defer:{
		if:"Boolean",
		label:"String"
	},
	Dataset:{
		id:"String",
		name:"String",
		contact:"String",
		description:"String",
		organization:"Organization",
		manifest:"Manifest"
	},
	Manifest:{
		versions:"Version"
	},
	Mutation:{
		createOrganization:"Organization",
		createDataset:"Dataset"
	},
	Organization:{
		id:"String",
		name:"String",
		contact:"String",
		description:"String",
		datasets:"Dataset"
	},
	Query:{
		organizations:"Organization",
		organization:"Organization",
		datasets:"Dataset",
		dataset:"Dataset"
	},
	Time: `scalar.Time` as const,
	Version:{
		author:"String",
		date:"Time",
		message:"String",
		hash:"String",
		pathType:"PathType",
		parents:"String"
	}
}

export const Ops = {
query: "Query" as const,
	mutation: "Mutation" as const
}