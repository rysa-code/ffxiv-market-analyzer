import { createFileRoute } from '@tanstack/react-router';
import { useAnalysisContext } from '../../providers/AnalysisProvider/AnalysisProvider';
import { Result } from './-components/Result';

export const Route = createFileRoute('/analysis/$id')({
  component: PostComponent,
});

function PostComponent() {
  const { id } = Route.useParams();
  const { analysisResults } = useAnalysisContext();

  const data = analysisResults?.find((r) => r.id === id);
  if (!data) return null;

  console.log(data.items.length);

  return <Result data={data} />;
}
