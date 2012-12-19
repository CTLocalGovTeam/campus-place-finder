/** @license
| Version 10.1.1
| Copyright 2012 Esri
|
| Licensed under the Apache License, Version 2.0 (the "License");
| you may not use this file except in compliance with the License.
| You may obtain a copy of the License at
|
|    http://www.apache.org/licenses/LICENSE-2.0
|
| Unless required by applicable law or agreed to in writing, software
| distributed under the License is distributed on an "AS IS" BASIS,
| WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
| See the License for the specific language governing permissions and
| limitations under the License.
*/
dojo.provide("js.config");
dojo.declare("js.config", null, {

    // This file contains various configuration settings for "Campus Building Viewer" template
    // 
    // Use this file to perform the following:
    //
    // 1. Specify application title                                          - [ Tag(s) to look for: ApplicationName ]
    // 2. Set path for application icon                                      - [ Tag(s) to look for: ApplicationIcon ]
    // 3. Set splash screen message                                          - [ Tag(s) to look for: SplashScreenMessage ]
    // 4. Set URL for help page                                              - [ Tag(s) to look for: HelpURL ]
    // 5. Set initial map extent                                             - [ Tag(s) to look for: DefaultExtent ]
    // 6. Set URL for geometry service                                       - [ Tag(s) to look for: GeometryService ]
    // 7. Set URL for Query                                                  - [ Tag(s) to look for: QueryURL ]
    // 8.Specify URLs for basemaps                                           - [ Tag(s) to look for: BaseMapLayers ]
    // 9a.Specify URLs for ServiceRequest                                    - [ Tag(s) to look for: ServiceRequest ]
    // 9b.Customize ServiceRequest info-Popup settings                       - [ Tag(s) to look for: InfoPopupFieldsCollection]
    // 10a.Feature layer URL for getting feature details                     - [ Tag(s) to look for: Operational layers]
    // 10b.Customize Operational layers info-Popup settings                  - [ Tag(s) to look for: InfoPopupFieldsCollection]
    // 11a.Layer details for searching different space types                 - [ Tag(s) to look for: PlaceLayer]
    // 11b.Customize searching different space types info-Popup settings     - [ Tag(s) to look for: InfoPopupFieldsCollection]
    // 12a..Layer details for related Employee table                         - [ Tag(s) to look for: PersonLayer]
    // 12b.Customize Employee table info-Popup settings                      - [ Tag(s) to look for: InfoPopupFieldsCollection]
    // 13.Default building selected on load of map                           - [ Tag(s) to look for: DefaultBuilding]
    // 14.Default floor selected within the selected building                - [ Tag(s) to look for: DefaultFloor]
    // 15.Default text for person  Search                                    - [ Tag(s) to look for: PersonText]
    // 16.Default text for Place  Search                                     - [ Tag(s) to look for: PlaceText]
    // 17.Customize data formatting                                          - [ Tag(s) to look for: ShowNullValueAs,InfoPopupHeight,InfoPopupWidth]
    // 18.Default Search                                                     - [ Tag(s) to look for: DefaultSearch,FloorSwitcher]
    // 19.Customize comment layers info-Popup settings                       - [ Tag(s) to look for: CommentsInfoPopupFieldsCollection]
    // 20. Specify URLs for map sharing                                      - [ Tag(s) to look for: MapSharingOptions (set TinyURLServiceURL, TinyURLResponseAttribute) ]
    // 20a.In case of changing the TinyURL service
    //     Specify URL for the new service                                   - [ Tag(s) to look for: FacebookShareURL, TwitterShareURL, ShareByMailLink ]

    // ------------------------------------------------------------------------------------------------------------------------
    // GENERAL SETTINGS
    // ------------------------------------------------------------------------------------------------------------------------
    // Set application title
    ApplicationName: "Campus Building Viewer",

    // Set application icon path
    ApplicationImage: "images/Finder.PNG",

    // Set splash window content - Message that appears when the application starts
    SplashScreenMessage: "Lorem ipsum dolor sit er elit lamet, consectetaur cillium adipisicing pecu, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Nam liber te conscient to factor tum poen legum odioque civiuda Lorem ipsum dolor sit er elit lamet, consectetaur cillium adipisicing pecu, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Nam liber te conscient to factor tum poen legum odioque civiuda Lorem ipsum dolor sit er elit lamet, consectetaur cillium adipisicing pecu, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Nam liber te conscient to factor tum poen legum odioque civiuda.",

    // Set URL of help page/portal
    HelpURL: "help.htm",

    // Initial map extent. Use comma (,) to separate values and don t delete the last comma
    DefaultExtent: "-13046368.774366917,4036413.338302078,-13046063.02625387,4036524.7094409126",

    //Set geometry service URL
    GeometryService: "http://localgovtemplates.esri.com/ArcGIS/rest/services/Geometry/GeometryServer",

    //URL for querying total buildings and floors
    QueryURL: "http://203.199.47.153:6080/arcgis/rest/services/CampusPlaceFinder/BuildingInterior/MapServer/0",

    // ------------------------------------------------------------------------------------------------------------------------
    // BASEMAP SETTINGS
    // ------------------------------------------------------------------------------------------------------------------------
    // Set baseMap layers
    // Please note: All base maps need to use the same spatial reference. By default, on application start the first basemap will be loaded 

    BaseMapLayers:
            [
		{
		    Key: "worldTopoMap",
		    ThumbnailSource: "images/TopoCampus.png",
		    Name: "Topo + Campus",
		    MapURL: [
				        {
				            LayerId: "worldTopoMap",
				            MapURL: "http://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer"
				        },
				        {
				            LayerId: "campusMap",
				            MapURL: "http://megacity.esri.com/ArcGIS/rest/services/CampusViewer/Campus_Viewer_Basemap_v5/MapServer"
				        }
			        ]
		},
		{
		    Key: "worldImageryMap",
		    ThumbnailSource: "images/imagery.jpg",
		    Name: "Imagery",
		    MapURL: [
				        {
				            LayerId: "worldImageryMap",
				            MapURL: "http://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer"
				        }
			        ]
		}
	       ],

    // ------------------------------------------------------------------------------------------------------------------------
    // ServiceRequest
	// ------------------------------------------------------------------------------------------------------------------------

	//Set configuration fields for Service Request layer
    ServiceRequest:
              {
                  Instructions: "Please enter an Address above or click directly on the map to locate the area you’d like to report. Fill out the form below and click Submit to initiate your service request. A service request number will be issued immediately, please take note of this number in order to track the status of your request. <br /> <br/> <b>Contacting Us by Phone</b> <br/> <hr/> <br/> Customer Service <br/> Hours: 8 am - 4 pm<br/> 555-555-1212 <br/>",
                  isEnabled: true,
                  LayerInfo:
                      {
                          Key: "srFloor0",
                          ServiceURL: "http://203.199.47.146/arcgis/rest/services/ServiceRequest/ServiceRequestCPF/FeatureServer/0",
                          WhereQuery: "floor = '${0}' AND status = 'Unassigned' AND (building = '${1}' or building = 'outside')",
                          OutFields: "*",
                          ShareFields: "${requestid}",
                          ShareQuery: "objectid = '${0}'",
                          RequestTypeFieldName: "requesttype",
                          CommentsLayerURL: "http://203.199.47.146/arcgis/rest/services/ServiceRequest/ServiceRequestCPF/FeatureServer/4",
                          CommentsOutFields: "*",
                          BuildingFloorPlan: "http://203.199.47.146/arcgis/rest/services/CampusPlaceFinder/BuildingInterior/MapServer/2",
                          BuildingAttribute: "BUILDINGKEY",
                          BuildingKey: "${BUILDINGKEY}",
                          Building: "${building}",
                          Floor: "${floor}"

                      },
                      // ------------------------------------------------------------------------------------------------------------------------
                      // INFO-POPUP SETTINGS
                      // ------------------------------------------------------------------------------------------------------------------------

                      // Info-popup is a popup dialog that gets displayed while creating a service request 
                      // Set the content to be displayed on the info-Popup. Define labels, field values, field types and field formats
                  InfoPopupFieldsCollection:
                      [
                          {
                              DisplayText: "Name :",
                              FieldName: "${name}",
                              HideCondition: true
                          },
                          {
                              DisplayText: "Phone :",
                              FieldName: "${phone}",
                              HideCondition: true
                          },
                          {
                              DisplayText: "Email :",
                              Email:true,
                              FieldName: "${email}",
                              HideCondition: true
                          },
			              {
			                  DisplayText: "Place :",
			                  FieldName: "${building}-${floor}",
			                  DataType: "string"
			              },
			              {
			                  DisplayText: "Type :",
			                  FieldName: "${requesttype}",
			                  DataType: "string"
			              },
			              {
			                  DisplayText: "Description :",
			                  FieldName: "${comments}",
			                  DataType: "description",
			                  id: "comments"
			              },
			              {
			                  DisplayText: "Date Submitted :",
			                  FieldName: "${requestdate}",
			                  DataType: "date",
			                  FormatDateAs: "MMM dd, yyyy"
			              }

		              ]
              },

    // ------------------------------------------------------------------------------------------------------------------------
    // OPERATIONAL DATA SETTINGS
    // ------------------------------------------------------------------------------------------------------------------------
    //Feature layer URL for getting feature details
	// Configure operational layers:
    OperationalLayers:
           [
		         {
		             Name: "Building Interior Spaces Type",
		             Key: "BuildingInteriorSpacesType",
		             MapURL: "http://203.199.47.153:6080/arcgis/rest/services/CampusPlaceFinder/BuildingInterior/MapServer/1",
		             DateFields:
                        [
				            {
				                DisplayField: "Last Update Date",
				                ValueField: "LASTUPDATE",
				                AliasField: "Last Update Date"
				            }
				        ],

				            // ------------------------------------------------------------------------------------------------------------------------
				            // INFO-POPUP SETTINGS
				            // ------------------------------------------------------------------------------------------------------------------------

				            // Info-popup is a popup dialog that gets displayed on selecting a feature 
				            // Set the content to be displayed on the info-Popup. Define labels, field values, field types and field formats
		             InfoPopupFieldsCollection:
                        [
					        {
					            DisplayText: "Name :",
					            FieldName: "${FIRSTNAME} ${LASTNAME}",
					            HideCondition: true
					        },
					        {
					            DisplayText: "Email :",
					            FieldName: "${EMAIL}",
					            "isLink": true,
					            HideCondition: true
					        },
					        {
					            DisplayText: "Phone :",
					            FieldName: "${EXTENSION}",
					            HideCondition: true
					        },
					        {
					            DisplayText: "Building :",
					            FieldName: "${BUILDING}"
					        },
					        {
					            DisplayText: "Floor :",
					            FieldName: "${FLOOR}"
					        },
					        {
					            DisplayText: "Wing :",
					            FieldName: "${WING}"
					        }
				        ],
		             Title: "${SPACETYPE} : ${SPACEID}",
                     Building: "${BUILDING}",
                     Floor: "${FLOOR}",
                     ObjectID: "${OBJECTID}",
		             isLayerVisible: true,
		             WhereQuery: "BUILDING = '${0}' AND FLOOR = '${1}'",
		             BuildingAttribute: "BUILDING",
		             hasDynamicMapService: true
		         },
	   {
	       Name: "Building Floorplan Lines",
	       Key: "BuildingFloorplanLines",
	       MapURL: "http://203.199.47.153:6080/arcgis/rest/services/CampusPlaceFinder/BuildingInterior/MapServer/0",
	       isLayerVisible: true,
	       WhereQuery: "BUILDINGKEY = '${0}' AND FLOOR = '${1}'"
	   }
	],


    // ------------------------------------------------------------------------------------------------------------------------
    //Set layer details for searching different space types
    // ------------------------------------------------------------------------------------------------------------------------
    PlaceLayer:
      {
          Key: "PlaceLayer",
          QueryURL: "http://203.199.47.153:6080/arcgis/rest/services/CampusPlaceFinder/BuildingInterior/MapServer/1",
          OutFields: "*",
          QueryFields: "BUILDING,FLOOR,SPACEID",
          SpaceType: "${SPACETYPE}",
          SpaceID: "SPACEID",
          DateFields:
                [
				    {
				        DisplayField: "Last Update Date",
				        ValueField: "LASTUPDATE",
				        AliasField: "Last Update Date"
				    }
                ],
				    // ------------------------------------------------------------------------------------------------------------------------
				    // INFO-POPUP SETTINGS
				    // ------------------------------------------------------------------------------------------------------------------------

				    // Info-popup is a popup dialog that gets displayed on selecting a feature from search results
				    // Set the content to be displayed on the info-Popup. Define labels, field values, field types and field formats
          InfoPopupFieldsCollection:
                [
					{
					    DisplayText: "Name :",
					    FieldName: "${FIRSTNAME} ${LASTNAME}",
					    HideCondition: true
					},
					{
					    DisplayText: "Email :",
					    FieldName: "${EMAIL}",
					    isLink: true,
					    HideCondition: true
					},
					{
					    DisplayText: "Phone :",
					    FieldName: "${EXTENSION}",
					    HideCondition: true
					},
					{
					    DisplayText: "Building :",
					    FieldName: "${BUILDING}"
					},
					{
					    DisplayText: "Floor :",
					    FieldName: "${FLOOR}"
					},
					{
					    DisplayText: "Wing :",
					    FieldName: "${WING}"
					}
				],
		  
          Title: "${SPACETYPE} : ${SPACEID}"
      },

      // ------------------------------------------------------------------------------------------------------------------------
      //Set layer details for searching a person
      // ------------------------------------------------------------------------------------------------------------------------
      PersonLayer:
         {
             Key: "PersonLayer",
             QueryURL: "http://203.199.47.153:6080/arcgis/rest/services/CampusPlaceFinder/BuildingInterior/MapServer/4",
             OutFields: "OBJECTID,FIRSTNAME,LASTNAME,EMAIL,EXTENSION,BUILDING,FLOOR,WING",
             QueryFields: "FIRSTNAME,LASTNAME",
             WhereQuery: "LOCATION = '${SPACEID}'",
             ShareQuery: "SPACEID='${0}'",
             ShareFields: "${SPACEID}",
             SpaceType: "SPACETYPE",
             SpaceID: "SPACEID",
             FirstName: "FIRSTNAME",
             LastName: "LASTNAME",
             // ------------------------------------------------------------------------------------------------------------------------
             // INFO-POPUP SETTINGS
             // ------------------------------------------------------------------------------------------------------------------------

             // Info-popup is a popup dialog that gets displayed on selecting a person from search results
             // Set the content to be displayed on the info-Popup. Define labels, field values, field types and field formats

             InfoPopupFieldsCollection:
                      [
					      {
					          DisplayText: "Name :",
					          FieldName: "${FIRSTNAME} ${LASTNAME}",
					          HideCondition: true
					      },
					      {
					          DisplayText: "Email :",
					          FieldName: "${EMAIL}",
					          isLink: true,
					          HideCondition: true
					      },
					      {
					          DisplayText: "Phone :",
					          FieldName: "${EXTENSION}",
					          HideCondition: true
					      },
					      {
					          DisplayText: "Building :",
					          FieldName: "${BUILDING}"
					      },
					      {
					          DisplayText: "Floor :",
					          FieldName: "${FLOOR}"
					      },
					      {
					          DisplayText: "Wing :",
					          FieldName: "${WING}"
					      }
				      ],

             Title: "${SPACETYPE} : ${SPACEID}"

         },
    //Set default building selected when map is loaded
    DefaultBuilding: 'M',

    //Set default floor selected within the selected building
    DefaultFloor: '1',

    //Set default watermark text displayed in search box for person search
    PersonText: "Enter first name or last name or both",

    //Set default watermark text displayed in search box for place search
    PlaceText: "Enter name of place e.g. MA",

    //Set string value to be displayed for null or blank values
    ShowNullValueAs: "N/A",

    // Set size of the info-Popup - select maximum height and width in pixels
    //minimum height should be 200 for the info-popup in pixels
    InfoPopupHeight: 275,

    // Minimum width should be 330 for the info-popup in pixels 
    InfoPopupWidth: 330, 

    //Set default search
    //Please note: Both values should not be same
    DefaultSearch:
    {
        Person: true, 
        Place: false
    },

    //Set floor switcher
    FloorSwitcher:
    {
        IsExpressVisible: true, IsAccordionVisible: true
    },

    //Set info-pop fields for adding and displaying comment for existing service request
    CommentsInfoPopupFieldsCollection: {
        Rank: "${rank}",
        RequestId: "${requestid}",
        SubmitDate: "${submitdt}",
        Comments: "${comments}"
    },

    // ------------------------------------------------------------------------------------------------------------------------
    // SETTINGS FOR MAP SHARING
    // ------------------------------------------------------------------------------------------------------------------------
    // Set URL for TinyURL service, and URLs for social media
    MapSharingOptions:
          {
              TinyURLServiceURL: "http://api.bit.ly/v3/shorten?login=esri&apiKey=R_65fd9891cd882e2a96b99d4bda1be00e&uri=${0}&format=json",
              TinyURLResponseAttribute: "data.url",
              FacebookShareURL: "http://www.facebook.com/sharer.php?u=${0}&t=Campus%20Building%20Viewer",
              TwitterShareURL: "http://twitter.com/home/?status=Campus%20Building%20Viewer ${0}",
              ShareByMailLink: "mailto:%20?subject=Checkout%20this%20map!&body=${0}"
          }
});