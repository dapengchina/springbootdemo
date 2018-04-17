$(function () {
	//加载用户列表
    loadUserList();
    //验证
    validate();
});


//用户列表
function loadUserList(){
    var queryUrl = '/Emp/admin/user/queryAll'
    var table = $('#userlist').bootstrapTable({
        url: queryUrl,                      //请求后台的URL（*）
        method: 'GET',                      //请求方式（*）
        toolbar: '#toolbar',              //工具按钮用哪个容器
        striped: true,                      //是否显示行间隔色
        cache: false,                       //是否使用缓存，默认为true，所以一般情况下需要设置一下这个属性（*）
        pagination: true,                   //是否显示分页（*）
        sortable: true,                     //是否启用排序
        sortOrder: "asc",                   //排序方式
        sidePagination: "server",           //分页方式：client客户端分页，server服务端分页（*）
        pageNumber: 1,                      //初始化加载第一页，默认第一页,并记录
        pageSize: 10,                     //每页的记录行数（*）
        pageList: [10, 25, 50, 100],        //可供选择的每页的行数（*）
        search: true,                      //是否显示表格搜索
        strictSearch: true,
        showColumns: true,                  //是否显示所有的列（选择显示的列）
        showRefresh: true,                  //是否显示刷新按钮
        minimumCountColumns: 2,             //最少允许的列数
        clickToSelect: true,                //是否启用点击选中行
        //height: 500,                      //行高，如果没有设置height属性，表格自动根据记录条数觉得表格高度
        uniqueId: "id",                     //每一行的唯一标识，一般为主键列
        showToggle: false,                   //是否显示详细视图和列表视图的切换按钮
        cardView: false,                    //是否显示详细视图
        detailView: false,                  //是否显示父子表
        //得到查询的参数
        queryParams : function (params) {
            //这里的键的名字和控制器的变量名必须一直，这边改动，控制器也需要改成一样的
            /*var temp = {   
                rows: params.limit,                         //页面大小
                page: (params.offset / params.limit) + 1,   //页码
                sort: params.sort,      //排序列名  
                sortOrder: params.order //排位命令（desc，asc） 
            };
           */
        	return {
        		pageSize: params.limit,
        		pageNumber: params.offset/params.limit+1,
            };
        },
        columns: [{
            checkbox: true,  
            visible: true                  //是否显示复选框  
        }, {
            field: 'nickName',
            title: 'NickName',
            sortable: true
        }, {
            field: 'userName',
            title: 'UserName',
            sortable: true
        },{
            field: 'phone',
            title: 'Phone',
            sortable: true
        },{
            field: 'isAppointName',
            title: 'IsAppointName',
            sortable: true
        },{
            field:'ID',
            title: 'Operation',
            width: 120,
            align: 'center',
            valign: 'middle'
        }, ],
        onLoadSuccess: function () {
        },
        onLoadError: function () {
            //showTips("数据加载失败！");
        },
        onDblClickRow: function (row, $element) {
            //var id = row.ID;
           // EditViewById(id, 'view');
        },
    });
}


function openImportPage(){
	$("#uimport").modal('show');
}

function validate(){
	$('#upuserfile').bootstrapValidator({
	　　　　message: 'This value is not valid',
	      　     feedbackIcons: {
	        　　　　　　　　valid: 'glyphicon glyphicon-ok',
	        　　　　　　　　invalid: 'glyphicon glyphicon-remove',
	        　　　　　　　　validating: 'glyphicon glyphicon-refresh'
	      　　　　　　　　  },
	      fields: {
	    	  file: {
	          validators: {
	            notEmpty: {
	              message: 'Please Choose File'
	            }
	          }
	        }
	      }
	});
}

function openAppointPage(){
	$("#appointTask").modal('show');
	loadTaskList();
}

//任务列表
function loadTaskList(){
    var queryUrl = '/Emp/admin/task/queryAll'
    var table = $('#tasklist').bootstrapTable({
        url: queryUrl,                      //请求后台的URL（*）
        method: 'GET',                      //请求方式（*）
        //toolbar: '#toolbar',              //工具按钮用哪个容器
        singleSelect:true,                  //禁止多选
        striped: true,                      //是否显示行间隔色
        cache: false,                       //是否使用缓存，默认为true，所以一般情况下需要设置一下这个属性（*）
        pagination: true,                   //是否显示分页（*）
        sortable: true,                     //是否启用排序
        sortOrder: "asc",                   //排序方式
        sidePagination: "server",           //分页方式：client客户端分页，server服务端分页（*）
        pageNumber: 1,                      //初始化加载第一页，默认第一页,并记录
        pageSize: 10,                     //每页的记录行数（*）
        pageList: [10, 25, 50, 100],        //可供选择的每页的行数（*）
        //search: true,                      //是否显示表格搜索
        strictSearch: true,
        showColumns: true,                  //是否显示所有的列（选择显示的列）
        showRefresh: true,                  //是否显示刷新按钮
        minimumCountColumns: 2,             //最少允许的列数
        clickToSelect: true,                //是否启用点击选中行
        //height: 500,                      //行高，如果没有设置height属性，表格自动根据记录条数觉得表格高度
        uniqueId: "id",                     //每一行的唯一标识，一般为主键列
        showToggle: false,                   //是否显示详细视图和列表视图的切换按钮
        cardView: false,                    //是否显示详细视图
        detailView: false,                  //是否显示父子表
        //得到查询的参数
        queryParams : function (params) {
            //这里的键的名字和控制器的变量名必须一直，这边改动，控制器也需要改成一样的
            /*var temp = {   
                rows: params.limit,                         //页面大小
                page: (params.offset / params.limit) + 1,   //页码
                sort: params.sort,      //排序列名  
                sortOrder: params.order //排位命令（desc，asc） 
            };
            return temp;*/
        	return {
        		pageSize: params.limit,
        		pageNumber: params.offset/params.limit+1,
            };
        },
        columns: [{
            checkbox: true,  
            visible: true                  //是否显示复选框  
        }, {
            field: 'taskname',
            title: 'Taskname',
            sortable: true
        },{
            field: 'startStringDate',
            title: 'StartDate',
            sortable: true
        }, {
            field: 'endStringDate',
            title: 'EndDate',
            sortable: true
        }, {
            field:'ID',
            title: 'Operation',
            width: 120,
            align: 'center',
            valign: 'middle'
        }, ],
        onLoadSuccess: function () {
        },
        onLoadError: function () {
            //showTips("数据加载失败！");
        },
        onDblClickRow: function (row, $element) {
            //var id = row.ID;
           // EditViewById(id, 'view');
        },
    });
}

function appoint(){
	//获取所选用户
	var userRows = $("#userlist").bootstrapTable('getSelections');
	var taskRows = $("#userlist").bootstrapTable('getSelections');
	var user = [];
	var task = [];
	for(k in userRows){
	    user.push(userRows[k].id);
	}
	for(j in taskRows){
		task.push(taskRows[k].id);
	}
	alert(user);
	alert(task);
	
	/*$.ajax({
		url:,
		dataType:"json",
		data:{use:JSON.stringify(user),tas:JSON.stringify(task)},
		async:true,
		cache:false,
		type:"post",
		success:function(result){
			if(result){
				
			}
		}
	})*/
}