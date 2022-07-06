import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { ClipLoader } from 'react-spinners';
import AssuranceDisplay from '../../../components/App/Assurance/AssuranceDisplay';
import DocumentCautionDisplay from '../../../components/App/DocumentCaution/DocumentDisplay';
import RetourButton from '../../../components/UI/RetourButton';
import { URLS } from '../../../config/urls';
import { getRequest } from '../../../utils/http';

function DocumentCautionPage() {
  const router = useRouter();
  const [document, setDocument] = useState<DocumentCaution>();
  const [loading, setLoading] = useState(false);
  const documentId = router.query.documentId || undefined;

  const fetchDocumentCaution = async () => {
    setLoading(true);

    if (documentId) {
      const response: CustomHttpResponse = await getRequest(
        +documentId,
        URLS.DOCUMENT_CAUTION
      );

      if (response.success) {
        setDocument(response.data.value);
      }
    }
    setLoading(false);
  };
  useEffect(() => {
    fetchDocumentCaution();
  }, []);
  return (
    <>
      {loading ? (
        <div className="flex justify-center">
          <ClipLoader color={'#000'} size={150} />
        </div>
      ) : (
        <div>
          <div className="flex">
            <RetourButton url={`/config/document`} />
          </div>
          <DocumentCautionDisplay document={document!} />
        </div>
      )}
    </>
  );
}

export default DocumentCautionPage;
