(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{11:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_exports__.default=angular.module("app.ui.tree.controller",[]).controller("AbnTestController",function($scope,$timeout){var apple_selected,tree,treedata_avm,treedata_geography;return $scope.my_tree_handler=function(branch){var _ref;if($scope.output="You selected: "+branch.label,null!=(_ref=branch.data)&&_ref.description)return $scope.output+="("+branch.data.description+")"},treedata_avm=[{label:"Animal",children:[{label:"Dog",data:{description:"man's best friend"}},{label:"Cat",data:{description:"Felis catus"}},{label:"Hippopotamus",data:{description:"hungry, hungry"}},{label:"Chicken",children:["White Leghorn","Rhode Island Red","Jersey Giant"]}]},{label:"Vegetable",data:{definition:"A plant or part of a plant used as food, typically as accompaniment to meat or fish, such as a cabbage, potato, carrot, or bean.",data_can_contain_anything:!0},onSelect:function(branch){return $scope.output="Vegetable: "+branch.data.definition},children:[{label:"Oranges"},{label:"Apples",children:[{label:"Granny Smith",onSelect:apple_selected=function(branch){return $scope.output="APPLE! : "+branch.label}},{label:"Red Delicous",onSelect:apple_selected},{label:"Fuji",onSelect:apple_selected}]}]},{label:"Mineral",children:[{label:"Rock",children:["Igneous","Sedimentary","Metamorphic"]},{label:"Metal",children:["Aluminum","Steel","Copper"]},{label:"Plastic",children:[{label:"Thermoplastic",children:["polyethylene","polypropylene","polystyrene"," polyvinyl chloride"]},{label:"Thermosetting Polymer",children:["polyester","polyurethane","vulcanized rubber","bakelite","urea-formaldehyde"]}]}]}],treedata_geography=[{label:"North America",children:[{label:"Canada",children:["Toronto","Vancouver"]},{label:"USA",children:["New York","Los Angeles"]},{label:"Mexico",children:["Mexico City","Guadalajara"]}]},{label:"South America",children:[{label:"Venezuela",children:["Caracas","Maracaibo"]},{label:"Brazil",children:["Sao Paulo","Rio de Janeiro"]},{label:"Argentina",children:["Buenos Aires","Cordoba"]}]}],$scope.my_data=treedata_avm,$scope.try_changing_the_tree_data=function(){return $scope.my_data===treedata_avm?$scope.my_data=treedata_geography:$scope.my_data=treedata_avm},$scope.my_tree=tree={},$scope.try_async_load=function(){return $scope.my_data=[],$scope.doing_async=!0,$timeout(function(){return Math.random()<.5?$scope.my_data=treedata_avm:$scope.my_data=treedata_geography,$scope.doing_async=!1,tree.expand_all()},1e3)},$scope.try_adding_a_branch=function(){var b;return b=tree.get_selected_branch(),tree.add_branch(b,{label:"New Branch",data:{something:42,else:43}})}})}}]);