import { baseApi as api } from "../base-api";
const injectedRtkApi = api.injectEndpoints({
  endpoints: (build) => ({
    getById: build.query<GetByIdApiResponse, GetByIdApiArg>({
      query: (queryArg) => ({
        url: `/api/v1/admin/widget-registry/${queryArg.id}`,
      }),
    }),
    update: build.mutation<UpdateApiResponse, UpdateApiArg>({
      query: (queryArg) => ({
        url: `/api/v1/admin/widget-registry/${queryArg.id}`,
        method: "PUT",
        body: queryArg.widgetRegistryDto,
      }),
    }),
    deleteApiV1AdminWidgetRegistryById: build.mutation<
      DeleteApiV1AdminWidgetRegistryByIdApiResponse,
      DeleteApiV1AdminWidgetRegistryByIdApiArg
    >({
      query: (queryArg) => ({
        url: `/api/v1/admin/widget-registry/${queryArg.id}`,
        method: "DELETE",
      }),
    }),
    getById1: build.query<GetById1ApiResponse, GetById1ApiArg>({
      query: (queryArg) => ({
        url: `/api/v1/admin/widget-container/${queryArg.id}`,
      }),
    }),
    update1: build.mutation<Update1ApiResponse, Update1ApiArg>({
      query: (queryArg) => ({
        url: `/api/v1/admin/widget-container/${queryArg.id}`,
        method: "PUT",
        body: queryArg.widgetContainerDto,
      }),
    }),
    delete1: build.mutation<Delete1ApiResponse, Delete1ApiArg>({
      query: (queryArg) => ({
        url: `/api/v1/admin/widget-container/${queryArg.id}`,
        method: "DELETE",
      }),
    }),
    getById2: build.query<GetById2ApiResponse, GetById2ApiArg>({
      query: (queryArg) => ({ url: `/api/v1/admin/roles/${queryArg.id}` }),
    }),
    update2: build.mutation<Update2ApiResponse, Update2ApiArg>({
      query: (queryArg) => ({
        url: `/api/v1/admin/roles/${queryArg.id}`,
        method: "PUT",
        body: queryArg.rolesDto,
      }),
    }),
    delete2: build.mutation<Delete2ApiResponse, Delete2ApiArg>({
      query: (queryArg) => ({
        url: `/api/v1/admin/roles/${queryArg.id}`,
        method: "DELETE",
      }),
    }),
    getById3: build.query<GetById3ApiResponse, GetById3ApiArg>({
      query: (queryArg) => ({ url: `/api/v1/admin/rate-limit/${queryArg.id}` }),
    }),
    update3: build.mutation<Update3ApiResponse, Update3ApiArg>({
      query: (queryArg) => ({
        url: `/api/v1/admin/rate-limit/${queryArg.id}`,
        method: "PUT",
        body: queryArg.apiRateLimitDto,
      }),
    }),
    delete3: build.mutation<Delete3ApiResponse, Delete3ApiArg>({
      query: (queryArg) => ({
        url: `/api/v1/admin/rate-limit/${queryArg.id}`,
        method: "DELETE",
      }),
    }),
    getById4: build.query<GetById4ApiResponse, GetById4ApiArg>({
      query: (queryArg) => ({ url: `/api/v1/admin/properties/${queryArg.id}` }),
    }),
    update4: build.mutation<Update4ApiResponse, Update4ApiArg>({
      query: (queryArg) => ({
        url: `/api/v1/admin/properties/${queryArg.id}`,
        method: "PUT",
        body: queryArg.propertyDto,
      }),
    }),
    getById5: build.query<GetById5ApiResponse, GetById5ApiArg>({
      query: (queryArg) => ({ url: `/api/v1/admin/groups/${queryArg.id}` }),
    }),
    update5: build.mutation<Update5ApiResponse, Update5ApiArg>({
      query: (queryArg) => ({
        url: `/api/v1/admin/groups/${queryArg.id}`,
        method: "PUT",
        body: queryArg.groupsDto,
      }),
    }),
    delete4: build.mutation<Delete4ApiResponse, Delete4ApiArg>({
      query: (queryArg) => ({
        url: `/api/v1/admin/groups/${queryArg.id}`,
        method: "DELETE",
      }),
    }),
    getById6: build.query<GetById6ApiResponse, GetById6ApiArg>({
      query: (queryArg) => ({
        url: `/api/v1/admin/api-registry/${queryArg.id}`,
      }),
    }),
    update6: build.mutation<Update6ApiResponse, Update6ApiArg>({
      query: (queryArg) => ({
        url: `/api/v1/admin/api-registry/${queryArg.id}`,
        method: "PUT",
        body: queryArg.apiRegistryDto,
      }),
    }),
    delete5: build.mutation<Delete5ApiResponse, Delete5ApiArg>({
      query: (queryArg) => ({
        url: `/api/v1/admin/api-registry/${queryArg.id}`,
        method: "DELETE",
      }),
    }),
    getById7: build.query<GetById7ApiResponse, GetById7ApiArg>({
      query: (queryArg) => ({
        url: `/api/v1/admin/api-permissions/${queryArg.id}`,
      }),
    }),
    update7: build.mutation<Update7ApiResponse, Update7ApiArg>({
      query: (queryArg) => ({
        url: `/api/v1/admin/api-permissions/${queryArg.id}`,
        method: "PUT",
        body: queryArg.apiPermissionDto,
      }),
    }),
    delete6: build.mutation<Delete6ApiResponse, Delete6ApiArg>({
      query: (queryArg) => ({
        url: `/api/v1/admin/api-permissions/${queryArg.id}`,
        method: "DELETE",
      }),
    }),
    getAllActive: build.query<GetAllActiveApiResponse, GetAllActiveApiArg>({
      query: () => ({ url: `/api/v1/admin/widget-registry` }),
    }),
    create: build.mutation<CreateApiResponse, CreateApiArg>({
      query: (queryArg) => ({
        url: `/api/v1/admin/widget-registry`,
        method: "POST",
        body: queryArg.widgetRegistryDto,
      }),
    }),
    getAllActive1: build.query<GetAllActive1ApiResponse, GetAllActive1ApiArg>({
      query: () => ({ url: `/api/v1/admin/widget-container` }),
    }),
    create1: build.mutation<Create1ApiResponse, Create1ApiArg>({
      query: (queryArg) => ({
        url: `/api/v1/admin/widget-container`,
        method: "POST",
        body: queryArg.widgetContainerDto,
      }),
    }),
    getWidgetContainerMappings: build.query<
      GetWidgetContainerMappingsApiResponse,
      GetWidgetContainerMappingsApiArg
    >({
      query: (queryArg) => ({
        url: `/api/v1/admin/widget-container/mappings`,
        params: {
          groupKey: queryArg.groupKey,
          includeDeleted: queryArg.includeDeleted,
        },
      }),
    }),
    createWidgetContainerMapping: build.mutation<
      CreateWidgetContainerMappingApiResponse,
      CreateWidgetContainerMappingApiArg
    >({
      query: (queryArg) => ({
        url: `/api/v1/admin/widget-container/mappings`,
        method: "POST",
        body: queryArg.widgetContainerMappingDto,
      }),
    }),
    createWidgetContainerMappingBatch: build.mutation<
      CreateWidgetContainerMappingBatchApiResponse,
      CreateWidgetContainerMappingBatchApiArg
    >({
      query: (queryArg) => ({
        url: `/api/v1/admin/widget-container/mappings/batch`,
        method: "POST",
        body: queryArg.body,
      }),
    }),
    deleteWidgetContainerMappingBatch: build.mutation<
      DeleteWidgetContainerMappingBatchApiResponse,
      DeleteWidgetContainerMappingBatchApiArg
    >({
      query: (queryArg) => ({
        url: `/api/v1/admin/widget-container/mappings/batch`,
        method: "DELETE",
        body: queryArg.body,
      }),
    }),
    getAllActive3: build.query<GetAllActive3ApiResponse, GetAllActive3ApiArg>({
      query: () => ({ url: `/api/v1/admin/roles` }),
    }),
    create2: build.mutation<Create2ApiResponse, Create2ApiArg>({
      query: (queryArg) => ({
        url: `/api/v1/admin/roles`,
        method: "POST",
        body: queryArg.rolesDto,
      }),
    }),
    getRolePermissions: build.query<
      GetRolePermissionsApiResponse,
      GetRolePermissionsApiArg
    >({
      query: (queryArg) => ({
        url: `/api/v1/admin/roles/permissions`,
        params: {
          roleKey: queryArg.roleKey,
          includeDeleted: queryArg.includeDeleted,
        },
      }),
    }),
    createRolePermission: build.mutation<
      CreateRolePermissionApiResponse,
      CreateRolePermissionApiArg
    >({
      query: (queryArg) => ({
        url: `/api/v1/admin/roles/permissions`,
        method: "POST",
        body: queryArg.rolePermissionDto,
      }),
    }),
    createRolePermissionBatch: build.mutation<
      CreateRolePermissionBatchApiResponse,
      CreateRolePermissionBatchApiArg
    >({
      query: (queryArg) => ({
        url: `/api/v1/admin/roles/permissions/batch`,
        method: "POST",
        body: queryArg.body,
      }),
    }),
    deleteRolePermissionBatch: build.mutation<
      DeleteRolePermissionBatchApiResponse,
      DeleteRolePermissionBatchApiArg
    >({
      query: (queryArg) => ({
        url: `/api/v1/admin/roles/permissions/batch`,
        method: "DELETE",
        body: queryArg.body,
      }),
    }),
    getAllActive4: build.query<GetAllActive4ApiResponse, GetAllActive4ApiArg>({
      query: () => ({ url: `/api/v1/admin/rate-limit` }),
    }),
    create3: build.mutation<Create3ApiResponse, Create3ApiArg>({
      query: (queryArg) => ({
        url: `/api/v1/admin/rate-limit`,
        method: "POST",
        body: queryArg.apiRateLimitDto,
      }),
    }),
    getAllActive6: build.query<GetAllActive6ApiResponse, GetAllActive6ApiArg>({
      query: () => ({ url: `/api/v1/admin/groups` }),
    }),
    create4: build.mutation<Create4ApiResponse, Create4ApiArg>({
      query: (queryArg) => ({
        url: `/api/v1/admin/groups`,
        method: "POST",
        body: queryArg.groupsDto,
      }),
    }),
    getGroupRoles: build.query<GetGroupRolesApiResponse, GetGroupRolesApiArg>({
      query: (queryArg) => ({
        url: `/api/v1/admin/groups/roles`,
        params: {
          groupKey: queryArg.groupKey,
          includeDeleted: queryArg.includeDeleted,
        },
      }),
    }),
    createGroupRole: build.mutation<
      CreateGroupRoleApiResponse,
      CreateGroupRoleApiArg
    >({
      query: (queryArg) => ({
        url: `/api/v1/admin/groups/roles`,
        method: "POST",
        body: queryArg.groupRoleDto,
      }),
    }),
    createGroupRoleBatch: build.mutation<
      CreateGroupRoleBatchApiResponse,
      CreateGroupRoleBatchApiArg
    >({
      query: (queryArg) => ({
        url: `/api/v1/admin/groups/roles/batch`,
        method: "POST",
        body: queryArg.body,
      }),
    }),
    deleteGroupRoleBatch: build.mutation<
      DeleteGroupRoleBatchApiResponse,
      DeleteGroupRoleBatchApiArg
    >({
      query: (queryArg) => ({
        url: `/api/v1/admin/groups/roles/batch`,
        method: "DELETE",
        body: queryArg.body,
      }),
    }),
    getAllActive7: build.query<GetAllActive7ApiResponse, GetAllActive7ApiArg>({
      query: () => ({ url: `/api/v1/admin/api-registry` }),
    }),
    create5: build.mutation<Create5ApiResponse, Create5ApiArg>({
      query: (queryArg) => ({
        url: `/api/v1/admin/api-registry`,
        method: "POST",
        body: queryArg.apiRegistryDto,
      }),
    }),
    getAllActive8: build.query<GetAllActive8ApiResponse, GetAllActive8ApiArg>({
      query: () => ({ url: `/api/v1/admin/api-permissions` }),
    }),
    create6: build.mutation<Create6ApiResponse, Create6ApiArg>({
      query: (queryArg) => ({
        url: `/api/v1/admin/api-permissions`,
        method: "POST",
        body: queryArg.apiPermissionDto,
      }),
    }),
    getMappings: build.query<GetMappingsApiResponse, GetMappingsApiArg>({
      query: (queryArg) => ({
        url: `/api/v1/admin/api-permissions/mappings`,
        params: {
          permKey: queryArg.permKey,
          includeDeleted: queryArg.includeDeleted,
        },
      }),
    }),
    createMapping: build.mutation<
      CreateMappingApiResponse,
      CreateMappingApiArg
    >({
      query: (queryArg) => ({
        url: `/api/v1/admin/api-permissions/mappings`,
        method: "POST",
        params: { list: queryArg.list },
      }),
    }),
    createMappingBatch: build.mutation<
      CreateMappingBatchApiResponse,
      CreateMappingBatchApiArg
    >({
      query: (queryArg) => ({
        url: `/api/v1/admin/api-permissions/mappings/batch`,
        method: "POST",
        body: queryArg.body,
      }),
    }),
    deleteMappingBatch: build.mutation<
      DeleteMappingBatchApiResponse,
      DeleteMappingBatchApiArg
    >({
      query: (queryArg) => ({
        url: `/api/v1/admin/api-permissions/mappings/batch`,
        method: "DELETE",
        body: queryArg.body,
      }),
    }),
    recover: build.mutation<RecoverApiResponse, RecoverApiArg>({
      query: (queryArg) => ({
        url: `/api/v1/admin/widget-registry/${queryArg.id}/recover`,
        method: "PATCH",
      }),
    }),
    enable: build.mutation<EnableApiResponse, EnableApiArg>({
      query: (queryArg) => ({
        url: `/api/v1/admin/widget-registry/${queryArg.id}/enable`,
        method: "PATCH",
      }),
    }),
    disable: build.mutation<DisableApiResponse, DisableApiArg>({
      query: (queryArg) => ({
        url: `/api/v1/admin/widget-registry/${queryArg.id}/disable`,
        method: "PATCH",
      }),
    }),
    recover1: build.mutation<Recover1ApiResponse, Recover1ApiArg>({
      query: (queryArg) => ({
        url: `/api/v1/admin/widget-container/${queryArg.id}/recover`,
        method: "PATCH",
      }),
    }),
    enable1: build.mutation<Enable1ApiResponse, Enable1ApiArg>({
      query: (queryArg) => ({
        url: `/api/v1/admin/widget-container/${queryArg.id}/enable`,
        method: "PATCH",
      }),
    }),
    disable1: build.mutation<Disable1ApiResponse, Disable1ApiArg>({
      query: (queryArg) => ({
        url: `/api/v1/admin/widget-container/${queryArg.id}/disable`,
        method: "PATCH",
      }),
    }),
    recoverWidgetContainerMapping: build.mutation<
      RecoverWidgetContainerMappingApiResponse,
      RecoverWidgetContainerMappingApiArg
    >({
      query: (queryArg) => ({
        url: `/api/v1/admin/widget-container/mappings/recover/${queryArg.id}`,
        method: "PATCH",
      }),
    }),
    recoverWidgetContainerMappingBatch: build.mutation<
      RecoverWidgetContainerMappingBatchApiResponse,
      RecoverWidgetContainerMappingBatchApiArg
    >({
      query: (queryArg) => ({
        url: `/api/v1/admin/widget-container/mappings/recover/batch`,
        method: "PATCH",
        body: queryArg.body,
      }),
    }),
    recover2: build.mutation<Recover2ApiResponse, Recover2ApiArg>({
      query: (queryArg) => ({
        url: `/api/v1/admin/roles/${queryArg.id}/recover`,
        method: "PATCH",
      }),
    }),
    enable2: build.mutation<Enable2ApiResponse, Enable2ApiArg>({
      query: (queryArg) => ({
        url: `/api/v1/admin/roles/${queryArg.id}/enable`,
        method: "PATCH",
      }),
    }),
    disable2: build.mutation<Disable2ApiResponse, Disable2ApiArg>({
      query: (queryArg) => ({
        url: `/api/v1/admin/roles/${queryArg.id}/disable`,
        method: "PATCH",
      }),
    }),
    recoverRolePermission: build.mutation<
      RecoverRolePermissionApiResponse,
      RecoverRolePermissionApiArg
    >({
      query: (queryArg) => ({
        url: `/api/v1/admin/roles/permissions/recover/${queryArg.id}`,
        method: "PATCH",
      }),
    }),
    recoverRolePermissionBatch: build.mutation<
      RecoverRolePermissionBatchApiResponse,
      RecoverRolePermissionBatchApiArg
    >({
      query: (queryArg) => ({
        url: `/api/v1/admin/roles/permissions/recover/batch`,
        method: "PATCH",
        body: queryArg.body,
      }),
    }),
    recover3: build.mutation<Recover3ApiResponse, Recover3ApiArg>({
      query: (queryArg) => ({
        url: `/api/v1/admin/rate-limit/${queryArg.id}/recover`,
        method: "PATCH",
      }),
    }),
    recover4: build.mutation<Recover4ApiResponse, Recover4ApiArg>({
      query: (queryArg) => ({
        url: `/api/v1/admin/groups/${queryArg.id}/recover`,
        method: "PATCH",
      }),
    }),
    enable3: build.mutation<Enable3ApiResponse, Enable3ApiArg>({
      query: (queryArg) => ({
        url: `/api/v1/admin/groups/${queryArg.id}/enable`,
        method: "PATCH",
      }),
    }),
    disable3: build.mutation<Disable3ApiResponse, Disable3ApiArg>({
      query: (queryArg) => ({
        url: `/api/v1/admin/groups/${queryArg.id}/disable`,
        method: "PATCH",
      }),
    }),
    recoverGroupRole: build.mutation<
      RecoverGroupRoleApiResponse,
      RecoverGroupRoleApiArg
    >({
      query: (queryArg) => ({
        url: `/api/v1/admin/groups/roles/recover/${queryArg.id}`,
        method: "PATCH",
      }),
    }),
    recoverGroupRoleBatch: build.mutation<
      RecoverGroupRoleBatchApiResponse,
      RecoverGroupRoleBatchApiArg
    >({
      query: (queryArg) => ({
        url: `/api/v1/admin/groups/roles/recover/batch`,
        method: "PATCH",
        body: queryArg.body,
      }),
    }),
    recover5: build.mutation<Recover5ApiResponse, Recover5ApiArg>({
      query: (queryArg) => ({
        url: `/api/v1/admin/api-registry/${queryArg.id}/recover`,
        method: "PATCH",
      }),
    }),
    enable4: build.mutation<Enable4ApiResponse, Enable4ApiArg>({
      query: (queryArg) => ({
        url: `/api/v1/admin/api-registry/${queryArg.id}/enable`,
        method: "PATCH",
      }),
    }),
    disable4: build.mutation<Disable4ApiResponse, Disable4ApiArg>({
      query: (queryArg) => ({
        url: `/api/v1/admin/api-registry/${queryArg.id}/disable`,
        method: "PATCH",
      }),
    }),
    recover6: build.mutation<Recover6ApiResponse, Recover6ApiArg>({
      query: (queryArg) => ({
        url: `/api/v1/admin/api-permissions/${queryArg.id}/recover`,
        method: "PATCH",
      }),
    }),
    enable5: build.mutation<Enable5ApiResponse, Enable5ApiArg>({
      query: (queryArg) => ({
        url: `/api/v1/admin/api-permissions/${queryArg.id}/enable`,
        method: "PATCH",
      }),
    }),
    disable5: build.mutation<Disable5ApiResponse, Disable5ApiArg>({
      query: (queryArg) => ({
        url: `/api/v1/admin/api-permissions/${queryArg.id}/disable`,
        method: "PATCH",
      }),
    }),
    recoverMapping: build.mutation<
      RecoverMappingApiResponse,
      RecoverMappingApiArg
    >({
      query: (queryArg) => ({
        url: `/api/v1/admin/api-permissions/mappings/recover/${queryArg.id}`,
        method: "PATCH",
      }),
    }),
    recoverMappingBatch: build.mutation<
      RecoverMappingBatchApiResponse,
      RecoverMappingBatchApiArg
    >({
      query: (queryArg) => ({
        url: `/api/v1/admin/api-permissions/mappings/recover/batch`,
        method: "PATCH",
        body: queryArg.body,
      }),
    }),
    search: build.query<SearchApiResponse, SearchApiArg>({
      query: (queryArg) => ({
        url: `/api/v1/admin/widget-registry/search`,
        params: {
          widgetKey: queryArg.widgetKey,
          widgetName: queryArg.widgetName,
          widgetDesc: queryArg.widgetDesc,
          isBeta: queryArg.isBeta,
          active: queryArg.active,
          deleted: queryArg.deleted,
          _sort: queryArg._sort,
          _association: queryArg._association,
        },
      }),
    }),
    autocomplete: build.query<AutocompleteApiResponse, AutocompleteApiArg>({
      query: (queryArg) => ({
        url: `/api/v1/admin/widget-registry/autocomplete`,
        params: { query: queryArg.query },
      }),
    }),
    getAll: build.query<GetAllApiResponse, GetAllApiArg>({
      query: () => ({ url: `/api/v1/admin/widget-registry/all` }),
    }),
    search1: build.query<Search1ApiResponse, Search1ApiArg>({
      query: (queryArg) => ({
        url: `/api/v1/admin/widget-container/search`,
        params: {
          containerKey: queryArg.containerKey,
          containerName: queryArg.containerName,
          isTrial: queryArg.isTrial,
          isBeta: queryArg.isBeta,
          active: queryArg.active,
          deleted: queryArg.deleted,
          _sort: queryArg._sort,
          _association: queryArg._association,
        },
      }),
    }),
    getWidgetContainerMappingById: build.query<
      GetWidgetContainerMappingByIdApiResponse,
      GetWidgetContainerMappingByIdApiArg
    >({
      query: (queryArg) => ({
        url: `/api/v1/admin/widget-container/mappings/${queryArg.id}`,
      }),
    }),
    deleteWidgetContainerMapping: build.mutation<
      DeleteWidgetContainerMappingApiResponse,
      DeleteWidgetContainerMappingApiArg
    >({
      query: (queryArg) => ({
        url: `/api/v1/admin/widget-container/mappings/${queryArg.id}`,
        method: "DELETE",
      }),
    }),
    autocomplete1: build.query<Autocomplete1ApiResponse, Autocomplete1ApiArg>({
      query: (queryArg) => ({
        url: `/api/v1/admin/widget-container/autocomplete`,
        params: { query: queryArg.query },
      }),
    }),
    getAll1: build.query<GetAll1ApiResponse, GetAll1ApiArg>({
      query: () => ({ url: `/api/v1/admin/widget-container/all` }),
    }),
    getAllActive2: build.query<GetAllActive2ApiResponse, GetAllActive2ApiArg>({
      query: () => ({ url: `/api/v1/admin/tenant` }),
    }),
    getByObjectId: build.query<GetByObjectIdApiResponse, GetByObjectIdApiArg>({
      query: (queryArg) => ({
        url: `/api/v1/admin/tenant/${queryArg.objectId}`,
      }),
    }),
    getByNumId: build.query<GetByNumIdApiResponse, GetByNumIdApiArg>({
      query: (queryArg) => ({ url: `/api/v1/admin/tenant/${queryArg.id}` }),
    }),
    getAll2: build.query<GetAll2ApiResponse, GetAll2ApiArg>({
      query: () => ({ url: `/api/v1/admin/tenant/all` }),
    }),
    search2: build.query<Search2ApiResponse, Search2ApiArg>({
      query: (queryArg) => ({
        url: `/api/v1/admin/roles/search`,
        params: {
          roleKey: queryArg.roleKey,
          roleName: queryArg.roleName,
          roleDesc: queryArg.roleDesc,
          active: queryArg.active,
          deleted: queryArg.deleted,
          _sort: queryArg._sort,
          _association: queryArg._association,
        },
      }),
    }),
    getRolePermissionById: build.query<
      GetRolePermissionByIdApiResponse,
      GetRolePermissionByIdApiArg
    >({
      query: (queryArg) => ({
        url: `/api/v1/admin/roles/permissions/${queryArg.id}`,
      }),
    }),
    deleteRolePermission: build.mutation<
      DeleteRolePermissionApiResponse,
      DeleteRolePermissionApiArg
    >({
      query: (queryArg) => ({
        url: `/api/v1/admin/roles/permissions/${queryArg.id}`,
        method: "DELETE",
      }),
    }),
    autocomplete2: build.query<Autocomplete2ApiResponse, Autocomplete2ApiArg>({
      query: (queryArg) => ({
        url: `/api/v1/admin/roles/autocomplete`,
        params: { query: queryArg.query },
      }),
    }),
    getAll3: build.query<GetAll3ApiResponse, GetAll3ApiArg>({
      query: () => ({ url: `/api/v1/admin/roles/all` }),
    }),
    search3: build.query<Search3ApiResponse, Search3ApiArg>({
      query: (queryArg) => ({
        url: `/api/v1/admin/rate-limit/search`,
        params: {
          permKey: queryArg.permKey,
          deleted: queryArg.deleted,
          _sort: queryArg._sort,
          _association: queryArg._association,
        },
      }),
    }),
    getAll4: build.query<GetAll4ApiResponse, GetAll4ApiArg>({
      query: () => ({ url: `/api/v1/admin/rate-limit/all` }),
    }),
    getAllActive5: build.query<GetAllActive5ApiResponse, GetAllActive5ApiArg>({
      query: () => ({ url: `/api/v1/admin/properties` }),
    }),
    getAll5: build.query<GetAll5ApiResponse, GetAll5ApiArg>({
      query: () => ({ url: `/api/v1/admin/properties/all` }),
    }),
    getLocalCacheKeys: build.query<
      GetLocalCacheKeysApiResponse,
      GetLocalCacheKeysApiArg
    >({
      query: () => ({ url: `/api/v1/admin/local/cache/keys` }),
    }),
    getLocalCacheKeyValue: build.query<
      GetLocalCacheKeyValueApiResponse,
      GetLocalCacheKeyValueApiArg
    >({
      query: (queryArg) => ({
        url: `/api/v1/admin/local/cache/keys/${queryArg.key}`,
      }),
    }),
    deleteLocalCacheKey: build.mutation<
      DeleteLocalCacheKeyApiResponse,
      DeleteLocalCacheKeyApiArg
    >({
      query: (queryArg) => ({
        url: `/api/v1/admin/local/cache/keys/${queryArg.key}`,
        method: "DELETE",
      }),
    }),
    search4: build.query<Search4ApiResponse, Search4ApiArg>({
      query: (queryArg) => ({
        url: `/api/v1/admin/groups/search`,
        params: {
          groupKey: queryArg.groupKey,
          groupName: queryArg.groupName,
          groupDesc: queryArg.groupDesc,
          active: queryArg.active,
          deleted: queryArg.deleted,
          _sort: queryArg._sort,
          _association: queryArg._association,
        },
      }),
    }),
    getGroupRoleById: build.query<
      GetGroupRoleByIdApiResponse,
      GetGroupRoleByIdApiArg
    >({
      query: (queryArg) => ({
        url: `/api/v1/admin/groups/roles/${queryArg.id}`,
      }),
    }),
    deleteGroupRole: build.mutation<
      DeleteGroupRoleApiResponse,
      DeleteGroupRoleApiArg
    >({
      query: (queryArg) => ({
        url: `/api/v1/admin/groups/roles/${queryArg.id}`,
        method: "DELETE",
      }),
    }),
    autocomplete3: build.query<Autocomplete3ApiResponse, Autocomplete3ApiArg>({
      query: (queryArg) => ({
        url: `/api/v1/admin/groups/autocomplete`,
        params: { query: queryArg.query },
      }),
    }),
    getAll6: build.query<GetAll6ApiResponse, GetAll6ApiArg>({
      query: () => ({ url: `/api/v1/admin/groups/all` }),
    }),
    getFrameworkCacheKeys: build.query<
      GetFrameworkCacheKeysApiResponse,
      GetFrameworkCacheKeysApiArg
    >({
      query: () => ({ url: `/api/v1/admin/framework/cache/keys` }),
    }),
    getFrameworkCacheKeyValue: build.query<
      GetFrameworkCacheKeyValueApiResponse,
      GetFrameworkCacheKeyValueApiArg
    >({
      query: (queryArg) => ({
        url: `/api/v1/admin/framework/cache/keys/${queryArg.key}`,
      }),
    }),
    deleteFrameworkCacheKey: build.mutation<
      DeleteFrameworkCacheKeyApiResponse,
      DeleteFrameworkCacheKeyApiArg
    >({
      query: (queryArg) => ({
        url: `/api/v1/admin/framework/cache/keys/${queryArg.key}`,
        method: "DELETE",
      }),
    }),
    getDefaultCacheKeys: build.query<
      GetDefaultCacheKeysApiResponse,
      GetDefaultCacheKeysApiArg
    >({
      query: () => ({ url: `/api/v1/admin/default/cache/keys` }),
    }),
    getDefaultCacheKeyValue: build.query<
      GetDefaultCacheKeyValueApiResponse,
      GetDefaultCacheKeyValueApiArg
    >({
      query: (queryArg) => ({
        url: `/api/v1/admin/default/cache/keys/${queryArg.key}`,
      }),
    }),
    deleteDefaultCacheKey: build.mutation<
      DeleteDefaultCacheKeyApiResponse,
      DeleteDefaultCacheKeyApiArg
    >({
      query: (queryArg) => ({
        url: `/api/v1/admin/default/cache/keys/${queryArg.key}`,
        method: "DELETE",
      }),
    }),
    refreshApplications: build.query<
      RefreshApplicationsApiResponse,
      RefreshApplicationsApiArg
    >({
      query: () => ({ url: `/api/v1/admin/applications/refresh` }),
    }),
    search5: build.query<Search5ApiResponse, Search5ApiArg>({
      query: (queryArg) => ({
        url: `/api/v1/admin/api-registry/search`,
        params: {
          apiKey: queryArg.apiKey,
          apiMethod: queryArg.apiMethod,
          apiPath: queryArg.apiPath,
          apiMode: queryArg.apiMode,
          serviceName: queryArg.serviceName,
          moduleName: queryArg.moduleName,
          isBeta: queryArg.isBeta,
          active: queryArg.active,
          deleted: queryArg.deleted,
          _sort: queryArg._sort,
          _association: queryArg._association,
        },
      }),
    }),
    autocomplete4: build.query<Autocomplete4ApiResponse, Autocomplete4ApiArg>({
      query: (queryArg) => ({
        url: `/api/v1/admin/api-registry/autocomplete`,
        params: { query: queryArg.query },
      }),
    }),
    getAll7: build.query<GetAll7ApiResponse, GetAll7ApiArg>({
      query: () => ({ url: `/api/v1/admin/api-registry/all` }),
    }),
    search6: build.query<Search6ApiResponse, Search6ApiArg>({
      query: (queryArg) => ({
        url: `/api/v1/admin/api-permissions/search`,
        params: {
          permKey: queryArg.permKey,
          permName: queryArg.permName,
          active: queryArg.active,
          deleted: queryArg.deleted,
          _sort: queryArg._sort,
          _association: queryArg._association,
        },
      }),
    }),
    getMappingById: build.query<
      GetMappingByIdApiResponse,
      GetMappingByIdApiArg
    >({
      query: (queryArg) => ({
        url: `/api/v1/admin/api-permissions/mappings/${queryArg.id}`,
      }),
    }),
    deleteMapping: build.mutation<
      DeleteMappingApiResponse,
      DeleteMappingApiArg
    >({
      query: (queryArg) => ({
        url: `/api/v1/admin/api-permissions/mappings/${queryArg.id}`,
        method: "DELETE",
      }),
    }),
    autocomplete5: build.query<Autocomplete5ApiResponse, Autocomplete5ApiArg>({
      query: (queryArg) => ({
        url: `/api/v1/admin/api-permissions/autocomplete`,
        params: { query: queryArg.query },
      }),
    }),
    getAll8: build.query<GetAll8ApiResponse, GetAll8ApiArg>({
      query: () => ({ url: `/api/v1/admin/api-permissions/all` }),
    }),
  }),
  overrideExisting: false,
});
export { injectedRtkApi as generatedApi };
export type GetByIdApiResponse =
  /** status 200 OK */ ApiResponseWidgetRegistryDto;
export type GetByIdApiArg = {
  id: number;
};
export type UpdateApiResponse =
  /** status 200 OK */ ApiResponseWidgetRegistryDto;
export type UpdateApiArg = {
  id: number;
  widgetRegistryDto: WidgetRegistryDto;
};
export type DeleteApiV1AdminWidgetRegistryByIdApiResponse =
  /** status 200 OK */ ApiResponseString;
export type DeleteApiV1AdminWidgetRegistryByIdApiArg = {
  id: number;
};
export type GetById1ApiResponse =
  /** status 200 OK */ ApiResponseWidgetContainerDto;
export type GetById1ApiArg = {
  id: number;
};
export type Update1ApiResponse =
  /** status 200 OK */ ApiResponseWidgetContainerDto;
export type Update1ApiArg = {
  id: number;
  widgetContainerDto: WidgetContainerDto;
};
export type Delete1ApiResponse = /** status 200 OK */ ApiResponseString;
export type Delete1ApiArg = {
  id: number;
};
export type GetById2ApiResponse = /** status 200 OK */ ApiResponseRolesDto;
export type GetById2ApiArg = {
  id: number;
};
export type Update2ApiResponse = /** status 200 OK */ ApiResponseRolesDto;
export type Update2ApiArg = {
  id: number;
  rolesDto: RolesDto;
};
export type Delete2ApiResponse = /** status 200 OK */ ApiResponseString;
export type Delete2ApiArg = {
  id: number;
};
export type GetById3ApiResponse =
  /** status 200 OK */ ApiResponseApiRateLimitDto;
export type GetById3ApiArg = {
  id: number;
};
export type Update3ApiResponse =
  /** status 200 OK */ ApiResponseApiRateLimitDto;
export type Update3ApiArg = {
  id: number;
  apiRateLimitDto: ApiRateLimitDto;
};
export type Delete3ApiResponse = /** status 200 OK */ ApiResponseString;
export type Delete3ApiArg = {
  id: number;
};
export type GetById4ApiResponse = /** status 200 OK */ ApiResponsePropertyDto;
export type GetById4ApiArg = {
  id: number;
};
export type Update4ApiResponse = /** status 200 OK */ ApiResponsePropertyDto;
export type Update4ApiArg = {
  id: number;
  propertyDto: PropertyDto;
};
export type GetById5ApiResponse = /** status 200 OK */ ApiResponseGroupsDto;
export type GetById5ApiArg = {
  id: number;
};
export type Update5ApiResponse = /** status 200 OK */ ApiResponseGroupsDto;
export type Update5ApiArg = {
  id: number;
  groupsDto: GroupsDto;
};
export type Delete4ApiResponse = /** status 200 OK */ ApiResponseString;
export type Delete4ApiArg = {
  id: number;
};
export type GetById6ApiResponse =
  /** status 200 OK */ ApiResponseApiRegistryDto;
export type GetById6ApiArg = {
  id: number;
};
export type Update6ApiResponse = /** status 200 OK */ ApiResponseApiRegistryDto;
export type Update6ApiArg = {
  id: number;
  apiRegistryDto: ApiRegistryDto;
};
export type Delete5ApiResponse = /** status 200 OK */ ApiResponseString;
export type Delete5ApiArg = {
  id: number;
};
export type GetById7ApiResponse =
  /** status 200 OK */ ApiResponseApiPermissionDto;
export type GetById7ApiArg = {
  id: number;
};
export type Update7ApiResponse =
  /** status 200 OK */ ApiResponseApiPermissionDto;
export type Update7ApiArg = {
  id: number;
  apiPermissionDto: ApiPermissionDto;
};
export type Delete6ApiResponse = /** status 200 OK */ ApiResponseString;
export type Delete6ApiArg = {
  id: number;
};
export type GetAllActiveApiResponse =
  /** status 200 OK */ ApiResponseListWidgetRegistryDto;
export type GetAllActiveApiArg = void;
export type CreateApiResponse =
  /** status 200 OK */ ApiResponseWidgetRegistryDto;
export type CreateApiArg = {
  widgetRegistryDto: WidgetRegistryDto;
};
export type GetAllActive1ApiResponse =
  /** status 200 OK */ ApiResponseListWidgetContainerDto;
export type GetAllActive1ApiArg = void;
export type Create1ApiResponse =
  /** status 200 OK */ ApiResponseWidgetContainerDto;
export type Create1ApiArg = {
  widgetContainerDto: WidgetContainerDto;
};
export type GetWidgetContainerMappingsApiResponse =
  /** status 200 OK */ ApiResponseListWidgetContainerMappingDto;
export type GetWidgetContainerMappingsApiArg = {
  groupKey: string;
  includeDeleted?: boolean;
};
export type CreateWidgetContainerMappingApiResponse =
  /** status 200 OK */ ApiResponseWidgetContainerMappingDto;
export type CreateWidgetContainerMappingApiArg = {
  widgetContainerMappingDto: WidgetContainerMappingDto;
};
export type CreateWidgetContainerMappingBatchApiResponse =
  /** status 200 OK */ ApiResponseListWidgetContainerMappingDto;
export type CreateWidgetContainerMappingBatchApiArg = {
  body: WidgetContainerMappingDto[];
};
export type DeleteWidgetContainerMappingBatchApiResponse =
  /** status 200 OK */ ApiResponseString;
export type DeleteWidgetContainerMappingBatchApiArg = {
  body: number[];
};
export type GetAllActive3ApiResponse =
  /** status 200 OK */ ApiResponseListRolesDto;
export type GetAllActive3ApiArg = void;
export type Create2ApiResponse = /** status 200 OK */ ApiResponseRolesDto;
export type Create2ApiArg = {
  rolesDto: RolesDto;
};
export type GetRolePermissionsApiResponse =
  /** status 200 OK */ ApiResponseListRolePermissionDto;
export type GetRolePermissionsApiArg = {
  roleKey: string;
  includeDeleted?: boolean;
};
export type CreateRolePermissionApiResponse =
  /** status 200 OK */ ApiResponseRolePermissionDto;
export type CreateRolePermissionApiArg = {
  rolePermissionDto: RolePermissionDto;
};
export type CreateRolePermissionBatchApiResponse =
  /** status 200 OK */ ApiResponseListRolePermissionDto;
export type CreateRolePermissionBatchApiArg = {
  body: RolePermissionDto[];
};
export type DeleteRolePermissionBatchApiResponse =
  /** status 200 OK */ ApiResponseString;
export type DeleteRolePermissionBatchApiArg = {
  body: number[];
};
export type GetAllActive4ApiResponse =
  /** status 200 OK */ ApiResponseListApiRateLimitDto;
export type GetAllActive4ApiArg = void;
export type Create3ApiResponse =
  /** status 200 OK */ ApiResponseApiRateLimitDto;
export type Create3ApiArg = {
  apiRateLimitDto: ApiRateLimitDto;
};
export type GetAllActive6ApiResponse =
  /** status 200 OK */ ApiResponseListGroupsDto;
export type GetAllActive6ApiArg = void;
export type Create4ApiResponse = /** status 200 OK */ ApiResponseGroupsDto;
export type Create4ApiArg = {
  groupsDto: GroupsDto;
};
export type GetGroupRolesApiResponse =
  /** status 200 OK */ ApiResponseListGroupRoleDto;
export type GetGroupRolesApiArg = {
  groupKey: string;
  includeDeleted?: boolean;
};
export type CreateGroupRoleApiResponse =
  /** status 200 OK */ ApiResponseGroupRoleDto;
export type CreateGroupRoleApiArg = {
  groupRoleDto: GroupRoleDto;
};
export type CreateGroupRoleBatchApiResponse =
  /** status 200 OK */ ApiResponseListGroupRoleDto;
export type CreateGroupRoleBatchApiArg = {
  body: GroupRoleDto[];
};
export type DeleteGroupRoleBatchApiResponse =
  /** status 200 OK */ ApiResponseString;
export type DeleteGroupRoleBatchApiArg = {
  body: number[];
};
export type GetAllActive7ApiResponse =
  /** status 200 OK */ ApiResponseListApiRegistryDto;
export type GetAllActive7ApiArg = void;
export type Create5ApiResponse = /** status 200 OK */ ApiResponseApiRegistryDto;
export type Create5ApiArg = {
  apiRegistryDto: ApiRegistryDto;
};
export type GetAllActive8ApiResponse =
  /** status 200 OK */ ApiResponseListApiPermissionDto;
export type GetAllActive8ApiArg = void;
export type Create6ApiResponse =
  /** status 200 OK */ ApiResponseApiPermissionDto;
export type Create6ApiArg = {
  apiPermissionDto: ApiPermissionDto;
};
export type GetMappingsApiResponse =
  /** status 200 OK */ ApiResponseListApiPermissionMappingDto;
export type GetMappingsApiArg = {
  permKey: string;
  includeDeleted?: boolean;
};
export type CreateMappingApiResponse =
  /** status 200 OK */ ApiResponseApiPermissionMappingDto;
export type CreateMappingApiArg = {
  list: ApiPermissionMappingDto;
};
export type CreateMappingBatchApiResponse =
  /** status 200 OK */ ApiResponseListApiPermissionMappingDto;
export type CreateMappingBatchApiArg = {
  body: ApiPermissionMappingDto[];
};
export type DeleteMappingBatchApiResponse =
  /** status 200 OK */ ApiResponseString;
export type DeleteMappingBatchApiArg = {
  body: number[];
};
export type RecoverApiResponse =
  /** status 200 OK */ ApiResponseWidgetRegistryDto;
export type RecoverApiArg = {
  id: number;
};
export type EnableApiResponse = /** status 200 OK */ ApiResponseString;
export type EnableApiArg = {
  id: number;
};
export type DisableApiResponse = /** status 200 OK */ ApiResponseString;
export type DisableApiArg = {
  id: number;
};
export type Recover1ApiResponse =
  /** status 200 OK */ ApiResponseWidgetContainerDto;
export type Recover1ApiArg = {
  id: number;
};
export type Enable1ApiResponse = /** status 200 OK */ ApiResponseString;
export type Enable1ApiArg = {
  id: number;
};
export type Disable1ApiResponse = /** status 200 OK */ ApiResponseString;
export type Disable1ApiArg = {
  id: number;
};
export type RecoverWidgetContainerMappingApiResponse =
  /** status 200 OK */ ApiResponseString;
export type RecoverWidgetContainerMappingApiArg = {
  id: number;
};
export type RecoverWidgetContainerMappingBatchApiResponse =
  /** status 200 OK */ ApiResponseString;
export type RecoverWidgetContainerMappingBatchApiArg = {
  body: number[];
};
export type Recover2ApiResponse = /** status 200 OK */ ApiResponseRolesDto;
export type Recover2ApiArg = {
  id: number;
};
export type Enable2ApiResponse = /** status 200 OK */ ApiResponseString;
export type Enable2ApiArg = {
  id: number;
};
export type Disable2ApiResponse = /** status 200 OK */ ApiResponseString;
export type Disable2ApiArg = {
  id: number;
};
export type RecoverRolePermissionApiResponse =
  /** status 200 OK */ ApiResponseString;
export type RecoverRolePermissionApiArg = {
  id: number;
};
export type RecoverRolePermissionBatchApiResponse =
  /** status 200 OK */ ApiResponseString;
export type RecoverRolePermissionBatchApiArg = {
  body: number[];
};
export type Recover3ApiResponse =
  /** status 200 OK */ ApiResponseApiRateLimitDto;
export type Recover3ApiArg = {
  id: number;
};
export type Recover4ApiResponse = /** status 200 OK */ ApiResponseGroupsDto;
export type Recover4ApiArg = {
  id: number;
};
export type Enable3ApiResponse = /** status 200 OK */ ApiResponseString;
export type Enable3ApiArg = {
  id: number;
};
export type Disable3ApiResponse = /** status 200 OK */ ApiResponseString;
export type Disable3ApiArg = {
  id: number;
};
export type RecoverGroupRoleApiResponse =
  /** status 200 OK */ ApiResponseString;
export type RecoverGroupRoleApiArg = {
  id: number;
};
export type RecoverGroupRoleBatchApiResponse =
  /** status 200 OK */ ApiResponseString;
export type RecoverGroupRoleBatchApiArg = {
  body: number[];
};
export type Recover5ApiResponse =
  /** status 200 OK */ ApiResponseApiRegistryDto;
export type Recover5ApiArg = {
  id: number;
};
export type Enable4ApiResponse = /** status 200 OK */ ApiResponseString;
export type Enable4ApiArg = {
  id: number;
};
export type Disable4ApiResponse = /** status 200 OK */ ApiResponseString;
export type Disable4ApiArg = {
  id: number;
};
export type Recover6ApiResponse =
  /** status 200 OK */ ApiResponseApiPermissionDto;
export type Recover6ApiArg = {
  id: number;
};
export type Enable5ApiResponse = /** status 200 OK */ ApiResponseString;
export type Enable5ApiArg = {
  id: number;
};
export type Disable5ApiResponse = /** status 200 OK */ ApiResponseString;
export type Disable5ApiArg = {
  id: number;
};
export type RecoverMappingApiResponse = /** status 200 OK */ ApiResponseString;
export type RecoverMappingApiArg = {
  id: number;
};
export type RecoverMappingBatchApiResponse =
  /** status 200 OK */ ApiResponseString;
export type RecoverMappingBatchApiArg = {
  body: number[];
};
export type SearchApiResponse =
  /** status 200 OK */ ApiResponseListWidgetRegistryDto;
export type SearchApiArg = {
  widgetKey?: string;
  widgetName?: string;
  widgetDesc?: string;
  isBeta?: boolean;
  active?: string;
  deleted?: string;
  _sort?: string;
  _association?: "OR" | "AND";
};
export type AutocompleteApiResponse =
  /** status 200 OK */ ApiResponseListWidgetRegistryDto;
export type AutocompleteApiArg = {
  query: string;
};
export type GetAllApiResponse =
  /** status 200 OK */ ApiResponseListWidgetRegistryDto;
export type GetAllApiArg = void;
export type Search1ApiResponse =
  /** status 200 OK */ ApiResponseListWidgetContainerDto;
export type Search1ApiArg = {
  containerKey?: string;
  containerName?: string;
  isTrial?: boolean;
  isBeta?: boolean;
  active?: string;
  deleted?: string;
  _sort?: string;
  _association?: "OR" | "AND";
};
export type GetWidgetContainerMappingByIdApiResponse =
  /** status 200 OK */ ApiResponseWidgetContainerMappingDto;
export type GetWidgetContainerMappingByIdApiArg = {
  id: number;
};
export type DeleteWidgetContainerMappingApiResponse =
  /** status 200 OK */ ApiResponseString;
export type DeleteWidgetContainerMappingApiArg = {
  id: number;
};
export type Autocomplete1ApiResponse =
  /** status 200 OK */ ApiResponseListWidgetContainerDto;
export type Autocomplete1ApiArg = {
  query: string;
};
export type GetAll1ApiResponse =
  /** status 200 OK */ ApiResponseListWidgetContainerDto;
export type GetAll1ApiArg = void;
export type GetAllActive2ApiResponse =
  /** status 200 OK */ ApiResponseListMongoTenantDto;
export type GetAllActive2ApiArg = void;
export type GetByObjectIdApiResponse =
  /** status 200 OK */ ApiResponseMongoTenantDto;
export type GetByObjectIdApiArg = {
  objectId: string;
};
export type GetByNumIdApiResponse =
  /** status 200 OK */ ApiResponseMongoTenantDto;
export type GetByNumIdApiArg = {
  id: number;
};
export type GetAll2ApiResponse =
  /** status 200 OK */ ApiResponseListMongoTenantDto;
export type GetAll2ApiArg = void;
export type Search2ApiResponse = /** status 200 OK */ ApiResponseListRolesDto;
export type Search2ApiArg = {
  roleKey?: string;
  roleName?: string;
  roleDesc?: string;
  active?: string;
  deleted?: string;
  _sort?: string;
  _association?: "OR" | "AND";
};
export type GetRolePermissionByIdApiResponse =
  /** status 200 OK */ ApiResponseRolePermissionDto;
export type GetRolePermissionByIdApiArg = {
  id: number;
};
export type DeleteRolePermissionApiResponse =
  /** status 200 OK */ ApiResponseString;
export type DeleteRolePermissionApiArg = {
  id: number;
};
export type Autocomplete2ApiResponse =
  /** status 200 OK */ ApiResponseListRolesDto;
export type Autocomplete2ApiArg = {
  query: string;
};
export type GetAll3ApiResponse = /** status 200 OK */ ApiResponseListRolesDto;
export type GetAll3ApiArg = void;
export type Search3ApiResponse =
  /** status 200 OK */ ApiResponseListApiRateLimitDto;
export type Search3ApiArg = {
  permKey?: string;
  deleted?: string;
  _sort?: string;
  _association?: "OR" | "AND";
};
export type GetAll4ApiResponse =
  /** status 200 OK */ ApiResponseListApiRateLimitDto;
export type GetAll4ApiArg = void;
export type GetAllActive5ApiResponse =
  /** status 200 OK */ ApiResponseListPropertyDto;
export type GetAllActive5ApiArg = void;
export type GetAll5ApiResponse =
  /** status 200 OK */ ApiResponseListPropertyDto;
export type GetAll5ApiArg = void;
export type GetLocalCacheKeysApiResponse =
  /** status 200 OK */ ApiResponseSetObject;
export type GetLocalCacheKeysApiArg = void;
export type GetLocalCacheKeyValueApiResponse =
  /** status 200 OK */ ApiResponseObject;
export type GetLocalCacheKeyValueApiArg = {
  key: string;
};
export type DeleteLocalCacheKeyApiResponse =
  /** status 200 OK */ ApiResponseBoolean;
export type DeleteLocalCacheKeyApiArg = {
  key: string;
};
export type Search4ApiResponse = /** status 200 OK */ ApiResponseListGroupsDto;
export type Search4ApiArg = {
  groupKey?: string;
  groupName?: string;
  groupDesc?: string;
  active?: string;
  deleted?: string;
  _sort?: string;
  _association?: "OR" | "AND";
};
export type GetGroupRoleByIdApiResponse =
  /** status 200 OK */ ApiResponseGroupRoleDto;
export type GetGroupRoleByIdApiArg = {
  id: number;
};
export type DeleteGroupRoleApiResponse = /** status 200 OK */ ApiResponseString;
export type DeleteGroupRoleApiArg = {
  id: number;
};
export type Autocomplete3ApiResponse =
  /** status 200 OK */ ApiResponseListGroupsDto;
export type Autocomplete3ApiArg = {
  query: string;
};
export type GetAll6ApiResponse = /** status 200 OK */ ApiResponseListGroupsDto;
export type GetAll6ApiArg = void;
export type GetFrameworkCacheKeysApiResponse =
  /** status 200 OK */ ApiResponseSetObject;
export type GetFrameworkCacheKeysApiArg = void;
export type GetFrameworkCacheKeyValueApiResponse =
  /** status 200 OK */ ApiResponseObject;
export type GetFrameworkCacheKeyValueApiArg = {
  key: string;
};
export type DeleteFrameworkCacheKeyApiResponse =
  /** status 200 OK */ ApiResponseString;
export type DeleteFrameworkCacheKeyApiArg = {
  key: string;
};
export type GetDefaultCacheKeysApiResponse =
  /** status 200 OK */ ApiResponseSetObject;
export type GetDefaultCacheKeysApiArg = void;
export type GetDefaultCacheKeyValueApiResponse =
  /** status 200 OK */ ApiResponseObject;
export type GetDefaultCacheKeyValueApiArg = {
  key: string;
};
export type DeleteDefaultCacheKeyApiResponse =
  /** status 200 OK */ ApiResponseString;
export type DeleteDefaultCacheKeyApiArg = {
  key: string;
};
export type RefreshApplicationsApiResponse =
  /** status 200 OK */ ApiResponseString;
export type RefreshApplicationsApiArg = void;
export type Search5ApiResponse =
  /** status 200 OK */ ApiResponseListApiRegistryDto;
export type Search5ApiArg = {
  apiKey?: string;
  apiMethod?: string;
  apiPath?: string;
  apiMode?: string;
  serviceName?: string;
  moduleName?: string;
  isBeta?: string;
  active?: string;
  deleted?: string;
  _sort?: string;
  _association?: "OR" | "AND";
};
export type Autocomplete4ApiResponse =
  /** status 200 OK */ ApiResponseListApiRegistryDto;
export type Autocomplete4ApiArg = {
  query: string;
};
export type GetAll7ApiResponse =
  /** status 200 OK */ ApiResponseListApiRegistryDto;
export type GetAll7ApiArg = void;
export type Search6ApiResponse =
  /** status 200 OK */ ApiResponseListApiPermissionDto;
export type Search6ApiArg = {
  permKey?: string;
  permName?: string;
  active?: string;
  deleted?: string;
  _sort?: string;
  _association?: "OR" | "AND";
};
export type GetMappingByIdApiResponse =
  /** status 200 OK */ ApiResponseApiPermissionMappingDto;
export type GetMappingByIdApiArg = {
  id: number;
};
export type DeleteMappingApiResponse = /** status 200 OK */ ApiResponseString;
export type DeleteMappingApiArg = {
  id: number;
};
export type Autocomplete5ApiResponse =
  /** status 200 OK */ ApiResponseListApiPermissionDto;
export type Autocomplete5ApiArg = {
  query: string;
};
export type GetAll8ApiResponse =
  /** status 200 OK */ ApiResponseListApiPermissionDto;
export type GetAll8ApiArg = void;
export type ApiResponseWidgetRegistryDto = {
  data?: object;
  message?: string;
};
export type ErrorBean = {
  code?: string;
  message?: string;
  field?: string;
};
export type ErrorResponse = {
  code?: string;
  message?: string;
  trace?: string;
  timestamp?: string;
  errors?: ErrorBean[];
};
export type WidgetRegistryDto = {
  createdBy?: number;
  editedBy?: number;
  createdDate?: string;
  editedDate?: string;
  id?: number;
  widgetKey?: string;
  widgetName?: string;
  widgetDesc?: string;
  isBeta?: boolean;
  active?: boolean;
  deleted?: boolean;
};
export type ApiResponseString = {
  data?: object;
  message?: string;
};
export type ApiResponseWidgetContainerDto = {
  data?: object;
  message?: string;
};
export type WidgetContainerDto = {
  createdBy?: number;
  editedBy?: number;
  createdDate?: string;
  editedDate?: string;
  id?: number;
  containerKey?: string;
  containerName?: string;
  isTrial?: boolean;
  isBeta?: boolean;
  active?: boolean;
  deleted?: boolean;
};
export type ApiResponseRolesDto = {
  data?: object;
  message?: string;
};
export type RolesDto = {
  createdBy?: number;
  editedBy?: number;
  createdDate?: string;
  editedDate?: string;
  id?: number;
  roleKey?: string;
  roleName?: string;
  roleDesc?: string;
  active?: boolean;
  deleted?: boolean;
};
export type ApiResponseApiRateLimitDto = {
  data?: object;
  message?: string;
};
export type ApiRateLimitDto = {
  createdBy?: number;
  editedBy?: number;
  createdDate?: string;
  editedDate?: string;
  id?: number;
  permKey?: string;
  rateLimit?: number;
  rateTtl?: number;
  deleted?: boolean;
};
export type ApiResponsePropertyDto = {
  data?: object;
  message?: string;
};
export type PropertyDto = {
  createdBy?: number;
  editedBy?: number;
  createdDate?: string;
  editedDate?: string;
  id?: number;
  propKey?: string;
  propValue?: string;
  propEnv?: string;
  deleted?: boolean;
};
export type ApiResponseGroupsDto = {
  data?: object;
  message?: string;
};
export type GroupsDto = {
  createdBy?: number;
  editedBy?: number;
  createdDate?: string;
  editedDate?: string;
  id?: number;
  groupKey?: string;
  groupName?: string;
  groupDesc?: string;
  active?: boolean;
  deleted?: boolean;
};
export type ApiResponseApiRegistryDto = {
  data?: object;
  message?: string;
};
export type ApiRegistryDto = {
  createdBy?: number;
  editedBy?: number;
  createdDate?: string;
  editedDate?: string;
  id?: number;
  apiKey?: string;
  apiMethod?: string;
  apiPath?: string;
  apiMode?: string;
  serviceName?: string;
  moduleName?: string;
  isBeta?: boolean;
  active?: boolean;
  deleted?: boolean;
};
export type ApiResponseApiPermissionDto = {
  data?: object;
  message?: string;
};
export type ApiPermissionDto = {
  createdBy?: number;
  editedBy?: number;
  createdDate?: string;
  editedDate?: string;
  id?: number;
  permKey?: string;
  permName?: string;
  isTrial?: boolean;
  isBeta?: boolean;
  active?: boolean;
  deleted?: boolean;
};
export type ApiResponseListWidgetRegistryDto = {
  data?: object;
  message?: string;
};
export type ApiResponseListWidgetContainerDto = {
  data?: object;
  message?: string;
};
export type ApiResponseListWidgetContainerMappingDto = {
  data?: object;
  message?: string;
};
export type ApiResponseWidgetContainerMappingDto = {
  data?: object;
  message?: string;
};
export type WidgetContainerMappingDto = {
  createdBy?: number;
  editedBy?: number;
  createdDate?: string;
  editedDate?: string;
  id?: number;
  containerKey?: string;
  widgetKey?: string;
  deleted?: boolean;
};
export type ApiResponseListRolesDto = {
  data?: object;
  message?: string;
};
export type ApiResponseListRolePermissionDto = {
  data?: object;
  message?: string;
};
export type ApiResponseRolePermissionDto = {
  data?: object;
  message?: string;
};
export type RolePermissionDto = {
  createdBy?: number;
  editedBy?: number;
  createdDate?: string;
  editedDate?: string;
  id?: number;
  roleKey?: string;
  permKey?: string;
  deleted?: boolean;
};
export type ApiResponseListApiRateLimitDto = {
  data?: object;
  message?: string;
};
export type ApiResponseListGroupsDto = {
  data?: object;
  message?: string;
};
export type ApiResponseListGroupRoleDto = {
  data?: object;
  message?: string;
};
export type ApiResponseGroupRoleDto = {
  data?: object;
  message?: string;
};
export type GroupRoleDto = {
  createdBy?: number;
  editedBy?: number;
  createdDate?: string;
  editedDate?: string;
  id?: number;
  groupKey?: string;
  roleKey?: string;
  deleted?: boolean;
};
export type ApiResponseListApiRegistryDto = {
  data?: object;
  message?: string;
};
export type ApiResponseListApiPermissionDto = {
  data?: object;
  message?: string;
};
export type ApiResponseListApiPermissionMappingDto = {
  data?: object;
  message?: string;
};
export type ApiResponseApiPermissionMappingDto = {
  data?: object;
  message?: string;
};
export type ApiPermissionMappingDto = {
  createdBy?: number;
  editedBy?: number;
  createdDate?: string;
  editedDate?: string;
  id?: number;
  permKey?: string;
  apiKey?: string;
  deleted?: boolean;
};
export type ApiResponseListMongoTenantDto = {
  data?: object;
  message?: string;
};
export type ApiResponseMongoTenantDto = {
  data?: object;
  message?: string;
};
export type ApiResponseListPropertyDto = {
  data?: object;
  message?: string;
};
export type ApiResponseSetObject = {
  data?: object;
  message?: string;
};
export type ApiResponseObject = {
  data?: object;
  message?: string;
};
export type ApiResponseBoolean = {
  data?: object;
  message?: string;
};
export const {
  useGetByIdQuery,
  useLazyGetByIdQuery,
  useUpdateMutation,
  useDeleteApiV1AdminWidgetRegistryByIdMutation,
  useGetById1Query,
  useLazyGetById1Query,
  useUpdate1Mutation,
  useDelete1Mutation,
  useGetById2Query,
  useLazyGetById2Query,
  useUpdate2Mutation,
  useDelete2Mutation,
  useGetById3Query,
  useLazyGetById3Query,
  useUpdate3Mutation,
  useDelete3Mutation,
  useGetById4Query,
  useLazyGetById4Query,
  useUpdate4Mutation,
  useGetById5Query,
  useLazyGetById5Query,
  useUpdate5Mutation,
  useDelete4Mutation,
  useGetById6Query,
  useLazyGetById6Query,
  useUpdate6Mutation,
  useDelete5Mutation,
  useGetById7Query,
  useLazyGetById7Query,
  useUpdate7Mutation,
  useDelete6Mutation,
  useGetAllActiveQuery,
  useLazyGetAllActiveQuery,
  useCreateMutation,
  useGetAllActive1Query,
  useLazyGetAllActive1Query,
  useCreate1Mutation,
  useGetWidgetContainerMappingsQuery,
  useLazyGetWidgetContainerMappingsQuery,
  useCreateWidgetContainerMappingMutation,
  useCreateWidgetContainerMappingBatchMutation,
  useDeleteWidgetContainerMappingBatchMutation,
  useGetAllActive3Query,
  useLazyGetAllActive3Query,
  useCreate2Mutation,
  useGetRolePermissionsQuery,
  useLazyGetRolePermissionsQuery,
  useCreateRolePermissionMutation,
  useCreateRolePermissionBatchMutation,
  useDeleteRolePermissionBatchMutation,
  useGetAllActive4Query,
  useLazyGetAllActive4Query,
  useCreate3Mutation,
  useGetAllActive6Query,
  useLazyGetAllActive6Query,
  useCreate4Mutation,
  useGetGroupRolesQuery,
  useLazyGetGroupRolesQuery,
  useCreateGroupRoleMutation,
  useCreateGroupRoleBatchMutation,
  useDeleteGroupRoleBatchMutation,
  useGetAllActive7Query,
  useLazyGetAllActive7Query,
  useCreate5Mutation,
  useGetAllActive8Query,
  useLazyGetAllActive8Query,
  useCreate6Mutation,
  useGetMappingsQuery,
  useLazyGetMappingsQuery,
  useCreateMappingMutation,
  useCreateMappingBatchMutation,
  useDeleteMappingBatchMutation,
  useRecoverMutation,
  useEnableMutation,
  useDisableMutation,
  useRecover1Mutation,
  useEnable1Mutation,
  useDisable1Mutation,
  useRecoverWidgetContainerMappingMutation,
  useRecoverWidgetContainerMappingBatchMutation,
  useRecover2Mutation,
  useEnable2Mutation,
  useDisable2Mutation,
  useRecoverRolePermissionMutation,
  useRecoverRolePermissionBatchMutation,
  useRecover3Mutation,
  useRecover4Mutation,
  useEnable3Mutation,
  useDisable3Mutation,
  useRecoverGroupRoleMutation,
  useRecoverGroupRoleBatchMutation,
  useRecover5Mutation,
  useEnable4Mutation,
  useDisable4Mutation,
  useRecover6Mutation,
  useEnable5Mutation,
  useDisable5Mutation,
  useRecoverMappingMutation,
  useRecoverMappingBatchMutation,
  useSearchQuery,
  useLazySearchQuery,
  useAutocompleteQuery,
  useLazyAutocompleteQuery,
  useGetAllQuery,
  useLazyGetAllQuery,
  useSearch1Query,
  useLazySearch1Query,
  useGetWidgetContainerMappingByIdQuery,
  useLazyGetWidgetContainerMappingByIdQuery,
  useDeleteWidgetContainerMappingMutation,
  useAutocomplete1Query,
  useLazyAutocomplete1Query,
  useGetAll1Query,
  useLazyGetAll1Query,
  useGetAllActive2Query,
  useLazyGetAllActive2Query,
  useGetByObjectIdQuery,
  useLazyGetByObjectIdQuery,
  useGetByNumIdQuery,
  useLazyGetByNumIdQuery,
  useGetAll2Query,
  useLazyGetAll2Query,
  useSearch2Query,
  useLazySearch2Query,
  useGetRolePermissionByIdQuery,
  useLazyGetRolePermissionByIdQuery,
  useDeleteRolePermissionMutation,
  useAutocomplete2Query,
  useLazyAutocomplete2Query,
  useGetAll3Query,
  useLazyGetAll3Query,
  useSearch3Query,
  useLazySearch3Query,
  useGetAll4Query,
  useLazyGetAll4Query,
  useGetAllActive5Query,
  useLazyGetAllActive5Query,
  useGetAll5Query,
  useLazyGetAll5Query,
  useGetLocalCacheKeysQuery,
  useLazyGetLocalCacheKeysQuery,
  useGetLocalCacheKeyValueQuery,
  useLazyGetLocalCacheKeyValueQuery,
  useDeleteLocalCacheKeyMutation,
  useSearch4Query,
  useLazySearch4Query,
  useGetGroupRoleByIdQuery,
  useLazyGetGroupRoleByIdQuery,
  useDeleteGroupRoleMutation,
  useAutocomplete3Query,
  useLazyAutocomplete3Query,
  useGetAll6Query,
  useLazyGetAll6Query,
  useGetFrameworkCacheKeysQuery,
  useLazyGetFrameworkCacheKeysQuery,
  useGetFrameworkCacheKeyValueQuery,
  useLazyGetFrameworkCacheKeyValueQuery,
  useDeleteFrameworkCacheKeyMutation,
  useGetDefaultCacheKeysQuery,
  useLazyGetDefaultCacheKeysQuery,
  useGetDefaultCacheKeyValueQuery,
  useLazyGetDefaultCacheKeyValueQuery,
  useDeleteDefaultCacheKeyMutation,
  useRefreshApplicationsQuery,
  useLazyRefreshApplicationsQuery,
  useSearch5Query,
  useLazySearch5Query,
  useAutocomplete4Query,
  useLazyAutocomplete4Query,
  useGetAll7Query,
  useLazyGetAll7Query,
  useSearch6Query,
  useLazySearch6Query,
  useGetMappingByIdQuery,
  useLazyGetMappingByIdQuery,
  useDeleteMappingMutation,
  useAutocomplete5Query,
  useLazyAutocomplete5Query,
  useGetAll8Query,
  useLazyGetAll8Query,
} = injectedRtkApi;
