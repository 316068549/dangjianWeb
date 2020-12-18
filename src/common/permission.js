/**
 * Created by Administrator on 2018/11/27.
 */
import {reqGetPermissionButton} from '../api/system-api'

export default{
    PermissionButton() {
        return {
            add:false,
            edit:false,
            del:false,
            batchDel:false
        }
    },
    getPermissionButton(permissionId,permissionButton) {
        reqGetPermissionButton({permissionId: permissionId}).then((res) => {
            let buttonArray = res.data.data;
            buttonArray.forEach(function(obj,i){
                if(obj.permissionUrl==='add'){
                    permissionButton.add=true;
                }
                if(obj.permissionUrl==='edit'){
                    permissionButton.edit=true;
                }
                if(obj.permissionUrl==='del'){
                    permissionButton.del=true;
                }
                if(obj.permissionUrl==='batchDel'){
                    permissionButton.batchDel=true;
                }
            });
        })
    }
}
