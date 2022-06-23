const fetchData = {
  post: async ({ url, params, contentType, accept, authorization, body }) => {
    const postData = await fetchData.request({
      method: 'POST',
      url,
      params,
      contentType,
      accept,
      authorization,
      body,
    });

    return postData;
  },
  get: async ({ url, params, accept, authorization }) => {
    const getData = await fetchData.request({
      method: 'GET',
      url,
      params,
      accept,
      authorization,
    });

    return getData;
  },
  put: async ({ url, params, contentType, accept, authorization, body }) => {
    const putData = await fetchData.request({
      method: 'PUT',
      url,
      params,
      contentType,
      accept,
      authorization,
      body,
    });

    return putData;
  },
  patch: async ({ url, params, contentType, accept, authorization, body }) => {
    const patchData = await fetchData.request({
      method: 'PATCH',
      url,
      params,
      contentType,
      accept,
      authorization,
      body,
    });

    return patchData;
  },
  delete: async ({ url, params, accept, authorization }) => {
    const deleteData = await fetchData.request({
      method: 'DELETE',
      url,
      params,
      accept,
      authorization,
    });

    return deleteData;
  },
  request: async ({
    method,
    url,
    params,
    contentType = 'application/json',
    accept = 'application/json',
    authorization,
    body,
  }) => {
    try {
      const newUrl = new URL(url);

      if (!!params && Object.keys(params).length > 0) {
        newUrl.search = new URLSearchParams(params).toString();
      }

      const newBody = () => {
        if (body) {
          if (contentType === 'application/x-www-form-urlencoded') {
            return { body: new URLSearchParams(body) };
          }

          return { body: JSON.stringify(body) };
        }

        return {};
      };

      const response = await fetch(newUrl, {
        method,
        headers: {
          'Content-Type': contentType,
          ...(accept !== 'none' ? { Accept: accept } : {}),
          ...(authorization ? { Authorization: authorization } : {}),
        },
        ...newBody(),
      });

      if (response.ok) {
        if (response.status === 202) {
          return {
            success: true,
            status: response.status,
          };
        }

        const result = accept !== 'none' ? await response.json() : 'success';

        return {
          success: true,
          payload: result,
          status: response.status,
        };
      }

      const fullErrMessage = await response.json();

      return {
        success: false,
        errCode: response.status,
        errMessage: response.statusText,
        fullErrMessage: fullErrMessage.error,
      };
    } catch (err) {
      return {
        success: false,
        errMessage: err,
      };
    }
  },
};

// export default fetchData

class TestApi {
  /**
   * create test
   *
   * @param {String} id - ID
   * @param {String} id - ID
   * @returns {Promise} Resolves status
   */

  // static createTest(id, id) {
  static createTest(id) {
    return fetchData
      .post({
        url: `urltest`,
        authorization: `${'token'}`,
      })
      .then(result => {
        if (result.success) {
          return {
            payload: result.payload,
            status: result.status,
          };
        }

        throw Object.assign(new Error(result.errMessage), {
          status: result.errCode,
          fullErrMessage: result.fullErrMessage,
        });
      })
      .catch(error => {
        throw error;
      });
  }

  static getResult(id, rerun, idF, page = 0, sort) {
    return fetchData
      .get({
        url: `${
          process.env.REACT_APP_API_ENDPOINT_URL
        }${id}/results?page=${page}&size=${10}
        ${sort ? `&sort=${sort}` : ''}${rerun ? `&rerun=${rerun}` : ''}${
          idF ? `&idF=${idF}` : ''
        }`,
        authorization: `${get('token')}`,
      })
      .then(result => {
        if (result.success) {
          return {
            payload: result.payload,
            status: result.status,
          };
        }

        throw Object.assign(new Error(result.errMessage), {
          status: result.errCode,
          fullErrMessage: result.fullErrMessage,
        });
      })
      .catch(error => {
        throw error;
      });
  }
}

// export default WorldCheckApi

const f = async () => {
  try {
    const result = await TestApi.createTest(id, id1);
    if (result.status === 202) {
      f();
    }
  } catch (err) {
    toaster.show({ mes: err.fullErrMessage });
  }
};
