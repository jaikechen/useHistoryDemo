export enum GlobalStateActionTypes {
	Set_State = "GlobalStateAction:Set State",
}
export class SetGlobalStateAction {
	public type = GlobalStateActionTypes.Set_State
	constructor(
		public payload:{ key:string,val:any }
	){}
}

